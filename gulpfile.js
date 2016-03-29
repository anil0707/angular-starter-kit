// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var gulpNgConfig = require('gulp-ng-config');


gulp.task('config', function () {
    gulp.src('config.json')
        .pipe(gulpNgConfig('myApp.config'))
        .pipe(gulp.dest('.'))
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src([
        'app.js',
        'config.js',
        './app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./app/assets/css/*.css')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['app.js','config.js','./app/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('library', function() {
    return gulp.src('./bower_components/**/*.js')
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./build/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['app.js','config.js','./app/**/*.js'], ['lint', 'scripts']);
    gulp.watch('./app/**/*.css', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      port: 4000,  
      fallback: 'index.html'
    }));
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'library', 'webserver', 'config']);