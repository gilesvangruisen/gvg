var gulp = require('gulp'),
gutil = require('gulp-util'),
connect = require('gulp-connect')

gulp.task('connect', function() {
  connect.server();
  gutil.log("Listening");
});

gulp.task('default', ['connect']);