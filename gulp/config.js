var basePaths = {
	src: 'assets/',
	dest: 'assets/build/'
};

var paths = {
	images: {
		src: basePaths.src + 'images/*/**',
		dest: basePaths.dest + 'images/'
	},
	scripts: {
		src: basePaths.src + 'js/',
		dest: basePaths.dest + 'js/'
	},
	styles: {
		src: basePaths.src + 'scss/main.scss',
		dest: basePaths.dest + 'css/'
	}
};

module.exports = {

	base: {
		src: basePaths.src,
		dest: basePaths.dest
	},

	sass: {
		src: paths.styles.src,
		dest: paths.styles.dest
	},

	scripts: {
		src: [
			paths.scripts.src + 'vendor/vendor.js',
			paths.scripts.src + 'site.js'
		],
		dest: paths.scripts.dest
	},

	images: {
		src: paths.images.src,
		dest: paths.images.dest
	}

}