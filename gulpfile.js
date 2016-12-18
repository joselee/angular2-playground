'use strict';
const gulp = require('gulp');
const fsbx = require('fuse-box');
const connect = require('gulp-connect');

const fuseBox = new fsbx.FuseBox({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './build/app.js.map',
    },
    cache: true,
    outFile: './build/app.js',
    plugins: [
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin,
        fsbx.HTMLPlugin({useDefault: false})
    ]
});

gulp.task('build', () => {
    return fuseBox.bundle('>main.ts');
});
gulp.task('view', () => {
    gulp.src('src/index.html').pipe(gulp.dest('build'));
});
gulp.task('default', ['build', 'view'], () => {
    gulp.watch('src/**/*.ts', ['build']);
    gulp.watch('src/index.html', ['view']);
    connect.server({ root: 'build', port: 3000 });
});