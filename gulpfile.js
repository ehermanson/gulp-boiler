// Load plugins
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var sass = require('gulp-ruby-sass');
var clean = require('gulp-clean');
var newer = require('gulp-newer');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");

// Set variables for file paths to make it easy to change the project's file directory structure
var basePaths = {
	src: 'assets/',
	dest: 'assets/build/'
};

var paths = {
	images: {
		src: basePaths.src + 'images/',
		dest: basePaths.dest + 'images/'
	},
	scripts: {
		src: basePaths.src + 'js/',
		dest: basePaths.dest + 'js/'
	},
	styles: {
		src: basePaths.src + 'scss/',
		dest: basePaths.dest + 'css/'
	}
};

var styleSrc = paths.styles.src;
var styleDest = paths.styles.dest;

var jsSrc = paths.scripts.src;
var jsDest = paths.scripts.dest;

var imgSrc = paths.images.src;
var imgDest = paths.images.dest;

// Styles
gulp.task('styles', function () {
	return gulp.src(styleSrc + 'main.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({
			style: 'expanded',
			"sourcemap=none": true // workaround to allow auto-prefixer to work
		}))
		.pipe(autoprefixer('last 2 version', 'ie 8', 'ios 6'))
		.pipe(gulp.dest(styleDest))
		.pipe(plugins.minifyCss({ keepSpecialComments: 1 }))
		.pipe(gulp.dest(styleDest))
		.pipe(livereload(8888))
		.pipe(notify({ message: 'Styles task complete' }));

});

// Concact & Minimize JS
gulp.task('js', function () {
	return gulp.src([
		jsSrc + 'site.js'
	])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(plugins.jshint('.jshintrc'))
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.concat('global.js'))
		.pipe(uglify())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(gulp.dest(jsDest))
		.pipe(livereload(8888))
		.pipe(notify({ message: 'JS task complete' }));
});

// Modernizr
gulp.task('modernizr', function () {
	return gulp.src(jsSrc + 'vendor/modernizr.js')
		.pipe(uglify())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(gulp.dest(jsDest))
		.pipe(notify({ message: 'Modernizr task complete' }));
});

// Images
gulp.task('images', function () {
	return gulp.src(imgSrc + '*/**')
		.pipe(newer(imgDest))
		.pipe(plugins.imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
		.pipe(gulp.dest(imgDest))
		.pipe(notify({ message: 'Images minified' }));
});

// Clean out Build Folder
gulp.task('clean', function () {
	return gulp.src([basePaths.dest], {read: false})
		.pipe(clean());
});

// Watch
gulp.task('watch', function () {

	// Watch .scss files
	gulp.watch(styleSrc +'**/*.scss', ['styles']);

	// Watch .js files
	gulp.watch(jsSrc +'**/*.js', ['js']);

	// Watch image files
	gulp.watch(imgSrc + '**/*', ['images']);

});

// Default task
gulp.task('default', ['watch']);
gulp.task('build', ['styles', 'modernizr', 'js', 'images', 'watch']);