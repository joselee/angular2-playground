'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');
const fsbx = require('fuse-box');

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
gulp.task('default', ['build'], () => {
    gulp.watch('src/**/*.ts', () => {
        runSequence('build');
    });
});