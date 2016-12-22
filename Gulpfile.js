'use strict';

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

var websiteJs   = "./assets/js/*.js";
var websiteSass = "./assets/sass/*.scss";


gulp.task('hint', function() {
    gulp.src(websiteJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('dist', function() {
    gulp.src(websiteJs)
        .pipe(concat(websiteJs))
        .pipe(rename('functions.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('sass', function() {
    gulp.src(websiteSass)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(websiteSass, ['sass']);
    gulp.watch(websiteJs, ['hint']);
    gulp.watch(websiteJs, ['dist']);
});