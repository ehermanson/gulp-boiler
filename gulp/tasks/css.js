var gulp = require('gulp');
var sass = require('gulp-sass');
var minCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../utils/handleErrors');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config').sass;

gulp.task('css', function () {
	return gulp.src(config.src)
		.pipe(sass({sourcemap: true}))
		.pipe(plumber({errorHandler: notify.onError(handleErrors)}))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer('last 2 version', 'ie 8', 'ios 6'))
		.pipe(minCss({ keepSpecialComments: 1 }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream:true}))
		.pipe(notify({ message: 'Styles task complete' }));
});