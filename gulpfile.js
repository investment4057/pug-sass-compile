// gulpプラグインの読み込み
var { src, dest, watch } = require("gulp");
var sass = require('gulp-sass')(require('sass'));
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var cssdeclsort = require("css-declaration-sorter");
var pug = require("gulp-pug");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
const concat = require('gulp-concat');

// Sassをコンパイルする
const compileSass = () =>
  // src("sass/*.scss")
  src("./css/**/*.scss")
    // Sassのコンパイルを実行
    .pipe(
      sass({
        outputStyle: "compressed",
      })
        // Sassのコンパイルエラーを表示
        // (これがないと自動的に止まってしまう)
        .on("error", sass.logError)
    )
    // sassの後に指定
    .pipe(postcss([cssdeclsort({ order: "smacss" })]))
    .pipe(postcss([autoprefixer()]))
    .pipe(postcss([mqpacker()]))
    // cssフォルダー以下に保存
    .pipe(dest("./css"));

// Sassファイルを監視
const watchSassFiles = () =>
  // watch("sass/*.scss", compileSass);
  watch("./css/**/*.scss", compileSass);

// pugをコンパイルする
const compilePug = () =>
  // src("./_html/**/*.pug")
  src("./_html/**/!(_)*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest("./_html"));

// pugファイルを監視
const watchPugFiles = () =>
  watch("./_html/**/*.pug", compilePug);

// npx gulpで実行される関数
exports.default = () =>
  watchPugFiles();
  watchSassFiles();

// jsファイルを結合して圧縮
// gulp compile-jsで実行
var gulp = require('gulp');
gulp.task("compile-js", function(){
  return src(['./js/plugin.js', './js/common.js'])
    .pipe(concat('common-min.js'))
    .pipe(uglify())
    // リネーム用
    // .pipe(rename({basename: '-min'}))
    // .pipe(rename({extname: '.min.js'}))
    .pipe(dest('./js/'));
});
