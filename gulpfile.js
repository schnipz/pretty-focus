var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var replace = require('gulp-replace');
var fs = require('fs');

var pkg = JSON.parse(fs.readFileSync('./package.json'));

gulp.task('scripts', function() {
  gulp.src('./src/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(replace('{{ pkgVersion }}', pkg.version))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('develop', ['scripts'], function() {
  gulp.watch(['./src/*.js'], ['scripts']);
});
