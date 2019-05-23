'use strict'

/**************** Global Imports ****************/

const { series, parallel, watch, src, dest } = require('gulp')
const browserSync = require('browser-sync').create()

const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

const del = require('del')
const htmlmin = require('gulp-htmlmin')
const sitemap = require('gulp-sitemap')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminGuetzli = require('imagemin-guetzli')

/**************** Functions ****************/

// Watch SCSS files -> sourcemap, autroprefixer, minify with cssnano, rename .css to .min.css
const scss = () => {
  return src('src/assets/_pre/sass/main.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['defaults'],
        cascade: false
      })
    )
    .pipe(
      cssnano({
        zindex: false
      })
    )
    .pipe(
      rename(function(path) {
        if (path.extname === '.css') {
          path.basename = 'styles'
          path.basename += '.min'
        }
      })
    )
    .pipe(dest('src/assets/css/', { sourcemaps: true }))
    .pipe(browserSync.stream())
}

// Watch JS files -> sourcemap, minifiy with uglify, concat
const js = () => {
  return src('src/assets/_pre/js/*.js', { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(dest('src/assets/js/', { sourcemaps: true }))
    .pipe(browserSync.stream())
}

// Concat Minified JS libraries
const jsLibs = () => {
  const libPaths = [
    'src/assets/libs/html5shiv.min.js',
    'src/assets/libs/respond.min.js'
  ]

  return src(libPaths)
    .pipe(concat('libs.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(dest('src/assets/js/'))
}

// Delete all files in the dist folder
const clean = () => {
  del.sync(['dist/**/*'])
  return Promise.resolve()
}

// Minify HTML files
const minifyHtml = () => {
  return src('src/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(dest('dist'))
}

// Create sitemap.xml
const generateSitemap = () => {
  return src('src/**/*.html', {
    read: false
  })
    .pipe(
      sitemap({
        siteUrl: 'https://renansigolo.com'
      })
    )
    .pipe(dest('dist'))
}

// Optimize Images - GIF, SVG and ICO
const optimizeGif = () => {
  return src('src/**/*.{gif,svg,ico}')
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3
        })
      ])
    )
    .pipe(dest('dist/'))
}

// Optimize Images - PNG
const optimizePng = () => {
  return src('src/**/*.png')
    .pipe(imagemin([imageminPngquant()]))
    .pipe(dest('dist/'))
}

// Optimize Images - JPG ang JPEG
const optimizeJpg = () => {
  return src('src/**/*.{jpg,jpeg}')
    .pipe(imagemin([imageminGuetzli()]))
    .pipe(dest('dist/'))
}

// Copy remaining files to dist
const copy = () => {
  return src([
    'src/**/*.{xml,txt,eot,ttf,woff,woff2,otf,ttf,php,css,js,json,map,pdf}',
    '!src/assets/_pre/**/*'
  ]).pipe(dest('dist/'))
}

// Watch
const watchFiles = () => {
  watch('src/**/*.html').on('change', browserSync.reload)
  watch('src/assets/_pre/sass/**/*.scss', scss)
  watch('src/assets/_pre/js/**/*.js', js)
  watch('node_modules/**/*', jsLibs)
}

// Serve
const serve = () => {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })

  watchFiles()
}

/**************** Gulp Commands ****************/

// Start
exports.start = serve

// Build
exports.build = parallel(scss, js, jsLibs)

// Build Production
exports.default = series(
  clean,
  parallel(
    minifyHtml,
    scss,
    js,
    jsLibs,
    generateSitemap,
    optimizeGif,
    optimizePng,
    optimizeJpg,
    copy
  )
)
