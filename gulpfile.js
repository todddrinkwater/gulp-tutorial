var gulp = require('gulp');
var del = require('del')

gulp.task('todd', function() {
  console.log("!!!");
});

gulp.task('clean:mobile', function () {
  return del([
    'client/report.csv',
    // here we use a globbing pattern to match everything inside the `mobile` folder
    'client/mobile/**/*',
    // we don't want to clean this file though so we negate the pattern
    '!client/mobile/deploy.json'
  ]);
});

gulp.task('default', ['todd', 'clean:mobile']);
