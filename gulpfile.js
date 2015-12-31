var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
  return new Promise(function (resolve, reject) {
    var task = gulp.src('./src/index.js')
      .pipe(babel({ presets: [ 'es2015' ] }))
      .pipe(gulp.dest('./build'));
    task.on('error', reject);
    task.on('end', resolve);
  });
});
