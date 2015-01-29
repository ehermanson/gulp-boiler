var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var size = require('gulp-size');
var rename  = require('gulp-rename');
var uglify = require("gulp-uglify");
var notify = require("gulp-notify");
var handleErrors = require('../utils/handleErrors');
var config = require('../config').scripts;

gulp.task('scripts', function () {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: notify.onError(handleErrors)}))
		.pipe(sourcemaps.init())
			.pipe(jshint('.jshintrc'))
			.pipe(jshint.reporter('default'))
			.pipe(concat('global.js', {newLine: ';'}))
			.pipe(uglify())
			.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest))
		.pipe(size())
		.pipe(notify({ message: 'JS task complete' }));
});