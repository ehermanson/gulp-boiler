var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});

// gulp.task('browser-sync', function() {
// 	browserSync({
// 		proxy: "site.dev"
// 	});
// });