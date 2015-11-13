var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**!',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * Copyright (c) <%= new Date().getFullYear() %> <%= pkg.author %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('scripts', function() {
  gulp.src('./src/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('develop', ['scripts'], function() {
  gulp.watch(['./src/*.js'], ['scripts']);
});

gulp.task('build', ['scripts']);
