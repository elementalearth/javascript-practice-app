// NOT CURRENTLY WORKING, WE ARE USING PARCEL.JS

var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('watcher', function() {
  gulp.watch('src/*.js', ['scripts']);
});

gulp.task('scripts', function() {
  return gulp
    .src('src/app.js')
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['scripts', 'watcher']);
