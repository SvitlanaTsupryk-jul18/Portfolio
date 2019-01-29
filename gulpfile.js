var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
//var babel = require("gulp-babel");

var paths = {
    styles: {
        src: "sass/**/*.scss",
        dest: "./css"
    },
    scripts: {
        src: 'scripts/*.js',
        dest: './'
    }
};

function style() {
    return (gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
    );
}

function scripts() {
    return gulp
        .src(paths.scripts.src)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch("path/to/html/*.html", reload);
    //gulp.watch(paths.scripts.src, scripts);
}
//var build = gulp.series(gulp.parallel(style, scripts));
exports.style = style;
exports.reload = reload;
exports.watch = watch;
exports.default = watch;