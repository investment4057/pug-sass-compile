# 動作確認済みバージョン

### macOS Catalina（バージョン:10.15.7）

```
node : v14.2.0
npm : 6.14.9
```

# package.json でモジュールの一括インストール

コマンドプロンプトでプロジェクトフォルダまで移動して、以下のコマンドを入力して Enter

```
$ npm install
```

`package.json`に書かれたバージョンのモジュールが一括でダウンロードされます。

結果、`node_modules`フォルダが作成され、この中にすべてのモジュールが入ります。

## 追加機能

- 2021.07.04 Pug と Sass の自動コンパイル
- 2022.05.23 JavaScript を自動 minify

### 機能一覧

- glup-sass : sass をコンパイル
- gulp-pug : pug をコンパイル
- css-mqpacker : コンパイル後にメディアクエリを 1 つにまとめる
- autoprefixer : ベンダープレフィックスを自動付与
- css-declaration-sorte : プロパティの順序を揃える（SMACSS 順）
- gulp-uglify : Js を minify する
- gulp-rename : コンパイル後の Js ファイルを min.js でリネームして出力
