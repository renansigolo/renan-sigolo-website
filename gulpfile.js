'use strict';

//GLOBAL
var gulp = require('gulp');

//VARIABLES FOR WATCH
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//VARIABLES FOR PRODUCTION
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var sitemap = require('gulp-sitemap');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminGuetzli = require('imagemin-guetzli');


//TASKS FOR WATCH

//Watch SCSS files -> sourcemap, autroprefixer, minify with cssnano, rename .css to .min.css
gulp.task('scss', function () {
    return gulp.src('src/assets/_pre/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano({
            zindex: false
        }))
        .pipe(rename(function (path) {
            if (path.extname === '.css') {
                path.basename = 'styles';
                path.basename += '.min';
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/assets/css/'));
});

//Watch JS files -> sourcemap, minifiy with uglify, concat

var jsFiles = [
  'src/assets/_pre/js/main.js'
];

gulp.task('js', function () {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scipts.js'))
        .pipe(rename(function (path) {
            if (path.extname === '.js') {
                path.basename += '.min';
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/assets/js/'));
});

//Watch Libs -> concat JS libraries

var libPaths = [
  // INSTALL YOUR JS LIBRARIES WITH YARN THEN INSERT THEIR PATH HERE
  // Ex. 'node_modules/angularfire/dist/angularfire.min.js'
];

gulp.task('jsLibs', function () {
    return gulp.src(libPaths)
        .pipe(concat('libs.js'))
        .pipe(rename(function (path) {
            if (path.extname === '.js') {
                path.basename += '.min';
            }
        }))
        .pipe(gulp.dest('src/assets/js/'));
});


//TASKS FOR DISTRIBUTION

//Delete all files in the dist folder
gulp.task('clean', function () {
    return del.sync(['dist/**/*']);
});

//Minify HTML files
gulp.task('htmlmin', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

//Create sitemap.xml
gulp.task('sitemap', function () {
    gulp.src('src/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://www.INSERT YOUR WEBSITE ADDRESS HERE.com.br'
        }))
        .pipe(gulp.dest('dist'));
});

//Optimize Images - GIF, SVG and ICO
gulp.task('imagemin', function () {
    gulp.src('src/**/*.{gif,svg,ico}')
        .pipe(imagemin([imagemin.gifsicle({
            interlaced: true,
            optimizationLevel: 3
        })]))
        .pipe(gulp.dest('dist/'));
});

//Optimize Images - PNG
gulp.task('imageminPngquant', function () {
    gulp.src('src/**/*.png')
        .pipe(imagemin([imageminPngquant()]))
        .pipe(gulp.dest('dist/'));
});

//Optimize Images - JPG ang JPEG
gulp.task('imageminGuetzli', function () {
    gulp.src('src/**/*.{jpg,jpeg}')
        .pipe(imagemin([imageminGuetzli()]))
        .pipe(gulp.dest('dist/'));
});

//Copy remaining files to dist
gulp.task('copy', ['scss', 'js', 'jsLibs'], function () {
    return gulp.src(['src/**/*.{xml,txt,eot,ttf,woff,woff2,otf,ttf,php,css,js,json,map,pdf}', '!src/assets/_pre/**/*'])
        .pipe(gulp.dest('dist/'));
});


//GULP TASKS

//Watch task
gulp.task('watch', function () {
    gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss']);
    gulp.watch('src/assets/_pre/js/**/*.js', ['js']);
    gulp.watch('node_modules/**/*', ['jsLibs']);
});

//Distribution task
gulp.task('default', ['clean', 'htmlmin', 'scss', 'js', 'jsLibs', 'sitemap', 'imagemin', 'imageminPngquant', 'imageminGuetzli', 'copy']);