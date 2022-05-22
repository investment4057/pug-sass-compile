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

// Sassをコンパイルする
const compileSass = () =>
  src("sass/*.scss")
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
    .pipe(dest("css"));

// Sassファイルを監視
const watchSassFiles = () =>
  watch("sass/*.scss", compileSass);

// pugをコンパイルする
const compilePug = () =>
  src("pug/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest("./"));

// pugファイルを監視
const watchPugFiles = () =>
  watch("pug/*.pug", compilePug);

  // js minifyを
const compileJs = () =>
  src(['./js/*.js', '!./js/*.min.js'])
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('./js/'));

// pugファイルを監視
const watchJsFiles = () =>
  watch("js/*.js", compileJs);

// npx gulpで実行される関数
exports.default = () =>
  watchPugFiles();
  watchSassFiles();
  watchJsFiles();
