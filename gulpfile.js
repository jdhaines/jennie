var gulp       = require('gulp');  
var less       = require('gulp-less');

gulp.task('default', function() {  
  gulp.src('./app/static/less/custom.less')
    .pipe(less())
    .pipe(gulp.dest('./app/static/css/'));
});