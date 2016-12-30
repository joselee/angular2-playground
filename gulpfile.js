const gulp = require('gulp');
const htmlreplace = require('gulp-html-replace');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const embedTemplates = require('gulp-angular-embed-templates');
const Builder = require('systemjs-builder');
const builder = new Builder('', 'systemjs.config.js');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

/* --- Production build tasks --- */
gulp.task('prod', ['build'], () => {
    return gulp.start(['prod-index', 'prod-css', 'prod-js']);
});
gulp.task('prod-js', () => {
    return builder.buildStatic('build/main.js', './dist/app.js', { minify: true });
});
gulp.task('prod-css', () => {
    return gulp.src('build/app.css')
        .pipe(gulp.dest('dist'));
});
gulp.task('prod-index', () => {
    return gulp.src('index.html')
        .pipe(htmlreplace({js: 'app.js', css: 'app.css'}))
        .pipe(gulp.dest('./dist'));
});


/* --- Core build tasks --- */
gulp.task('build', ['ts', 'sass']);
gulp.task('ts', () => {
    return gulp.src('src/**/*.ts')
        .pipe(embedTemplates({ sourceType: 'ts' }))
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});
gulp.task('sass', () => {
    return gulp.src('src/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});


/* --- Default serve and watch --- */
gulp.task('watch', ['build'], () => {
    gulp.watch(['src/**/*.ts', 'src/**/*.html'], ['ts']);
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: '.', directory: false },
        startPath: '/'
    });
    gulp.watch('build/**/*').on('change', browserSync.reload);
});