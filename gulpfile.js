import gulp from "gulp";
import imagemin from "gulp-imagemin";
import cwebp from "gulp-cwebp";

// Image optimization and conversion task
gulp.task("optimize-and-convert-images", function () {
  return gulp
    .src("uploads/*") // Adjust the source folder as needed
    .pipe(imagemin())
    .pipe(gulp.dest("uploads")) // Output folder for optimized images
    .pipe(cwebp())
    .pipe(gulp.dest("uploads")); // Output folder for WebP images
});

// Default task
gulp.task("default", gulp.series("optimize-and-convert-images"));
