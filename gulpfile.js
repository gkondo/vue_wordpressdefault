var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
 
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
 
 
gulp.task('convertToCss', function() {
  gulp.src('./src/scss/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./'));
});
gulp.task('webpack',function(){
    return gulp.src('./src/js/*.js')
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('./'));
})
 
gulp.task('default', function() {
    gulp.watch('./src/scss/**/*.scss',['convertToCss']);
    gulp.watch('./src/js/app.js',['webpack']);
});