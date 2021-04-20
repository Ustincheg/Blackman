'use strict';

const _BS = require('browser-sync').create();
const _D = require('del');
const _G = require('gulp');
const _GR = require('gulp-rename');
const _GP = require('gulp-plumber');
const _GS = require('gulp-sourcemaps');
const _GSass = require('gulp-sass');
const _GA = require('gulp-autoprefixer');
const _GCSSO = require('gulp-csso');
const _GU = require('gulp-uglify-es').default;
const _GC = require('gulp-concat');

_G.task('style-min', function () {
  return _G.src('../static/styles/uni.scss')
    .pipe(_GP())
    .pipe(_GS.init())
    .pipe(_GSass())
    .pipe(_GA())
    .pipe(_GCSSO())
    .pipe(_GR('style.min.css'))
    .pipe(_GS.write('.'))
    .pipe(_G.dest('../../public'))
    .pipe(_BS.stream());
});

_G.task('scripts-min-preload', function () {
  return _G.src(
      [
        '../static/scripts/global/**/*.js'
      ]
    )
    .pipe(_GS.init())
    .pipe(_GU())
    .pipe(_GC('scripts-preload.min.js'))
    .pipe(_GS.write('.'))
    .pipe(_G.dest('../../public'))
    .pipe(_BS.stream());
});

_G.task('scripts-min', function () {
  return _G.src(
      [
        '../static/scripts/**/*.js'
      ]
    )
    .pipe(_GS.init())
    .pipe(_GU())
    .pipe(_GC('scripts.min.js'))
    .pipe(_GS.write('.'))
    .pipe(_G.dest('../../public'))
    .pipe(_BS.stream());
});

_G.task('clean', function () {
  return _D('../../public', {force: true});
});

_G.task('build', _G.series('clean', 'style-min', 'scripts-min-preload', 'scripts-min'));

_G.task('refresh', function (done) {
  _BS.reload();
  done();
});

_G.task('server', function () {
  _BS.init({
    server: {
      baseDir: '../../', 
      index: 'index.html' 
    },
    notify: false,
    open: true,
    cors: true,
    ui: false
  })

  _G.watch('../static/styles/**/*.{css,scss}', _G.series('style-min', 'refresh'));
  _G.watch('../static/scripts/**/*.js', _G.series('scripts-min-preload', 'scripts-min', 'refresh'));
  _G.watch('../../**/*.{html,pug,php}', _G.series('refresh'));
})

_G.task('dev', _G.series('build', 'server'));