'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    pug = require('gulp-pug'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        pug: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: {
        pug: 'src/*.pug',
        js: 'src/js/main.js',
        style: 'src/css/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        pug: 'src/**/*.pug',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dist'
};

var config = {
    server: {
        baseDir: "./dist"
    },
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('pug:build', function () {
    gulp.src(path.src.pug)
        .pipe(rigger())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.pug))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'pug:build',
    'js:build',
    'css:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.pug], function(event, cb) {
        gulp.start('pug:build');
    }, ['pug']);
    watch([path.watch.style], function(event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);