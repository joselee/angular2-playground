'use strict';
const gulp = require('gulp');
const fsbx = require('fuse-box');
const browserSync = require('browser-sync').create();

const fuseBox = new fsbx.FuseBox({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map',
    },
    cache: true,
    outFile: './dist/app.js',
    plugins: [
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin,
        fsbx.HTMLPlugin({useDefault: false})
    ]
});

gulp.task('ts', () => {
    return fuseBox.bundle('>main.ts');
});
gulp.task('copy-index', () => {
    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
gulp.task('watch', ['ts', 'copy-index'], () => {
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/**/*.html', ['ts']);
    gulp.watch('src/index.html', ['copy-index']);
});
gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: 'dist', directory: false },
        startPath:'/'
    });
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});