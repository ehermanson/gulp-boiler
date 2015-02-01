var paths = {
	src: 'src/',
	dest: 'build/'
};

// This object may be referenced by gulp tasks when config.js is required
module.exports = {

	base: {
		src: paths.src,
		dest: paths.dest
	},

	sass: {
		src: paths.src + 'scss/main.scss',
		dest: paths.dest + 'css/'
	},

	scripts: {
		src: [
			paths.src + 'js/vendor/vendor.js',
			paths.src + 'js/site.js'
		],
		dest: paths.dest + 'js/'
	},

	images: {
		src: paths.src + 'images/**/*',
		dest: paths.dest + 'images/'
	}
}