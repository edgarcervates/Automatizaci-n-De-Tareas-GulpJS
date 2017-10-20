var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('style', function(){
  gulp.src('./src/css/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./build/css'));
});
