Gulp Boilerplate
================

This is a base Gulp starting point for front-end projects. The main tasks have been broken out into individual modules in the `gulp/tasks` folder, which makes for a super clean and simple `gulpfile`.

This is a simple starting point that focuses on the following front-end tasks:
- [Sass/SCSS](http://sass-lang.com/) (using [gulp-sass](https://www.npmjs.com/package/gulp-sass), sourcemaps, and [Autoprefixer](https://github.com/postcss/autoprefixer)
- Javascript jshint, concatenation and minification
- Browser refreshing using [BrowserSync](http://www.browsersync.io/)
- [Image Optimization](https://www.npmjs.com/package/gulp-imagemin)
- Prints file size after build related tasks

#### Config.js

File paths and settings can be configured in `gulp/config`, which the individual task modules can reference. Adjust the src/build folders and paths as needed for project.

#### Clean out Build Folder

Run `gulp clean` to clean out the build folder specified in `gulp/config`

#### Build

Run `gulp build` to run all the production tasks and re-build the `build` folder with optimized css, js, and images.

#### Updating Dependencies

To update and save all dependencies to their most recent version: `npm-check-updates -u` (if you blindly update packages, make sure to test to ensure everything still works)

[NPM Check Updates](https://github.com/tjunnone/npm-check-updates)