# Pug, Scss Compile, Js Minify

## Gulp 設定

Scss, Pug のコンパイルには Gulp を使用。

```
node : v16.15.0
npm : 8.5.5
```

### package.json でモジュール一括インストール

プロジェクトフォルダ直下で、以下のコマンドを実行。（package.json に書かれたバージョンのモジュールが一括でダウンロードされる）

```
% npm install
```

#### 機能一覧

- glup-sass : sass をコンパイル
- gulp-pug : pug をコンパイル
- css-mqpacker : コンパイル後にメディアクエリを 1 つにまとめる
- autoprefixer : ベンダープレフィックスを自動付与
- css-declaration-sorte : プロパティの順序を揃える（SMACSS 順）
- gulp-uglify : Js を minify する
- gulp-rename : コンパイル後の Js ファイルを min.js でリネームして出力

### 【非推奨】Sass の除算（ / ）

CSS の値で / （スラッシュ） を区切りとして使用するプロパティがあり、そういった場合、「除算と区切りとどちらの意味として取ればいいか判断できない」という状況が出てしまう。

よって、Sass の除算で / （スラッシュ） は非推奨でコンパイルエラーとなるため、代替として math.div を使用。

テンプレートでは、非推奨の書き方なので、以下のパッケージを使用して一括置換。

```
% npm install -g sass-migrator
% sass-migrator division **/*.scss
```

### オリジナルのタスクを使えるようにパスを通して Js を Minify

```
% export PATH=$PATH:./node_modules/.bin
% gulp compile-js
```
