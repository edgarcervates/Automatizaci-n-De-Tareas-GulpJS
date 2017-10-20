var gulp = require('gulp');
var minjs = require('gulp-uglify');

gulp.task('test', function() {
  console.log("Hola mundo");
});

gulp.task('mainminjs', function(){
  gulp.src('./src/js/main.js')
  .pipe(minjs())
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('varmainjs', function(){
  gulp.watch('./src/js/*.js', ['mainminjs']);
});
