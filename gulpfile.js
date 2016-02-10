// include gulp
var gulp       = require('gulp');

// include plugins
var less       = require('gulp-less');
var watch      = require('gulp-watch');

// Task to compile less
gulp.task('compile-less', function() {  
  gulp.src('./app/static/less/custom.less')
    .pipe(less())
    .pipe(gulp.dest('./app/static/css/'));
});

// Task to watch less changes
gulp.task('watch-less', function() {
	gulp.watch('./app/static/less/custom.less', ['compile-less']);
});

// Task when running 'gulp' from terminal
gulp.task('default', ['compile-less', 'watch-less']);
