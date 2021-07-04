# 動作確認済みバージョン
### macOS Catalina（バージョン:10.15.7）

```
node : v14.2.0
npm : 6.14.9
```

# package.jsonでモジュールの一括インストール
コマンドプロンプトでプロジェクトフォルダまで移動して、以下のコマンドを入力してEnter

```
$ npm install
```

package.jsonに書かれたバージョンのモジュールが一括でダウンロードされます。

結果、「node_modules」フォルダが作成され、この中にすべてのモジュールが入ります。
