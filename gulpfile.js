'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

gulp.task('clean', function() {
    return gulp.src('./src/css/*', {read: false})
        .pipe(clean());
});

gulp.task('concat-sass', function () {
    return gulp.src('./src/js/**/*.sass')
        .pipe(concat('_components.sass'))
        .pipe(gulp.dest('./src/sass/'))
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/app.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/js/**/*.sass', ['concat-sass']);
    gulp.watch('./src/sass/*.sass', ['sass']);
});

gulp.task('default', ['clean', 'concat-sass', 'sass']);