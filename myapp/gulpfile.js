/*jslint node, maxlen: 120 */

"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('development/sass/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(minifyCss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('scripts', function () {
    return gulp.src('public/javascripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts/min'));
});

gulp.task('watch', ['sass', 'scripts'], function () {
    gulp.watch('development/sass/**/*.scss', ['sass']);
    gulp.watch('public/javascripts/main.js', ['scripts']);
});

