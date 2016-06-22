/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('html', function () {
    //如果html,js有修改就刷新html页面
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.html', './src/*.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);