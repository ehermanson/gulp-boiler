var gulp = require("gulp");
var newer = require("gulp-newer");
var notify = require("gulp-notify");
var imagemin = require("gulp-imagemin")
var handleErrors = require('../utils/handleErrors');
var config = require('../config').images;

gulp.task('images', function () {
	return gulp.src(config.src)
		.pipe(newer(config.dest))
		.pipe(imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
		.pipe(gulp.dest(config.dest))
		.pipe(notify({ message: 'Images minified' }));
});