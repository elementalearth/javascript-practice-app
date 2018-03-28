var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('gulp-browserify');

gulp.task('watcher', function(){
  gulp.watch('src/*.js', ['scripts'])
});

gulp.task("scripts", function () {
  return gulp.src("src/app.js")
    .pipe(babel({presets: ['env']}))
    .pipe(browserify({
          insertGlobals : true,
        }))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['scripts', 'watcher']);
