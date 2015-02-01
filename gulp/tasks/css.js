var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minCss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var size = require('gulp-size');
var notify = require("gulp-notify");
var config = require('../config').sass;

gulp.task('css', function () {
	return gulp.src(config.src)
		.pipe(sass({ sourcemap: true }))
		.pipe(plumber())
		.pipe(sourcemaps.init())
			.pipe(autoprefixer({ browsers: [ '> 5%', 'last 2 versions', 'ie 8', 'ios 6' ] }))
			.pipe(minCss({ keepSpecialComments: 1 }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest))
		.pipe(reload({ stream:true }))
		.pipe(size({ showFiles: true, title: 'File Size:' }))
		.pipe(notify({ title: 'Gulp Success!', message: 'CSS task complete' }));
});