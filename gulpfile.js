var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

gulp.task("sass", () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("browserSync", function () {
  console.log("browser sync");
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("watch", gulp.series("browserSync"));
