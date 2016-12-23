'use strict';
const gulp = require('gulp');
const fsbx = require('fuse-box');
const connect = require('gulp-connect');

const fuseBox = new fsbx.FuseBox({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map',
    },
    cache: true,
    outFile: './dist/app.js',
    plugins: [
        fsbx.TypeScriptHelpers,
        fsbx.JSONPlugin,
        fsbx.HTMLPlugin({useDefault: false})
    ]
});

gulp.task('ts', () => {
    return fuseBox.bundle('>main.ts');
});
gulp.task('html', () => {
    gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
gulp.task('default', ['ts', 'html'], () => {
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/index.html', ['html']);
    connect.server({ root: 'dist', port: 3000 });
});