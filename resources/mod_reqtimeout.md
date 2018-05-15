# mod_reqtimeout

## Documentation
https://httpd.apache.org/docs/2.4/mod/mod_reqtimeout.html

## モジュールの有効化
```
LoadModule reqtimeout_module modules/mod_reqtimeout.so
```

## 使い方
### 単純にタイムアウト値を設定する
```
RequestReadTimeout header=10 body=30
```
ヘッダのタイムアウト値を10秒に，ボディのタイムアウト値を30秒に設定

### データサイズによってタイムアウトを増加させる
```
RequestReadTimeout body=10,MinRate=1000
```
ボディのタイムアウト値を10秒に設定する．ボディのデータを1000バイト受け取るごとにタイムアウト値は1秒ずつ伸びる（上限なし）．

```
RequestReadTimeout header=10-30,MinRate=500
```
ヘッダのタイムアウト値を10秒に設定する．以降，500バイト受け取るごとに1秒ずつタイムアウト値を延長するが，30秒を上限とする（30秒以上にはならない）．

```
RequestReadTimeout header=20-40,MinRate=500 body=20,MinRate=500
```
ヘッダとボディのどちらにもタイムアウトを設定．

タイムアウトになると， `408 REQUEST TIME OUT` がクライアントに返却される．
