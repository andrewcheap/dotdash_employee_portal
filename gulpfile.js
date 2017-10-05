// Include gulp
var gulp = require('gulp');

// Include config
var config = require('./gulp.conf')

// Include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint task
gulp.task('lint', function() {
	return gulp.src(config.files.app)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})

// Concatenate & Minify JS
gulp.task('scripts', function() {
	var allFiles = config.files.vendor.concat(config.files.app);
	return gulp.src(allFiles)
		.pipe(concat('all.js'))
		.pipe(gulp.dest(config.paths.dist + "/js"))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.paths.dist + "/js"));
})

// Concatenate & Minify CSS
gulp.task('css', function() {
	var allFiles = config.files.vendorCss.concat(config.files.css);

	return gulp.src(allFiles)
		.pipe(concat('appStyles.css'))
		.pipe(gulp.dest(config.paths.dist + "/css"));
})

// Watch
gulp.task('watch', function() {
	gulp.watch(config.files.app, ['build']);
})

// Build
gulp.task('build', ['lint', 'scripts', 'css']);