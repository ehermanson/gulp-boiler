var gulp = require('gulp');
var del = require('del');
var config = require('../config').base;

gulp.task('clean', function () {
  return del(config.dest);
});