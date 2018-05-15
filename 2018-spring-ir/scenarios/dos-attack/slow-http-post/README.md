# Webページがなかなか開かない

## 概要
Webページ（ `bravo` , FreeBSD）にアクセスしてからページがなかなか表示されない

## 対象ユーザ
* `bravo` 使用者全員

## 報告者
* CEO
    - 複数の利用者から，Webページにアクセスしてからページが表示されないという報告があった

## 対象サーバ
* `bravo` (FreeBSD)

## 問題の原因
`bravo` がSlow HTTP POST攻撃を受けており， `MaxRequestWorkers` の上限までソケットが使い果たされていた．
そのため，新規の接続ができずにページがなかなか表示されなかった．

## 対応
* Apache側で，Timeout関連の設定を確認する
    - `httpd.conf`
        - `mod_reqtimeout` を有効にする
    - `extra/httpd-default.conf`
        - `Timeout` : Apache 2.4のデフォルトは30秒
        - `mod_reqtimeout` の設定
            - `RequestReadTimeout` : Apache 2.4のデフォルトは `header=20-40,MinRate=500 body=20,MinRate=500`
            - doc.) https://httpd.apache.org/docs/2.4/mod/mod_reqtimeout.html
* ref.) https://news.mynavi.jp/article/20151228-a347/
* `MaxRequestWorkers` の設定も一応確認しておくと良いかも
    - 少なすぎたら適宜増やす

## 問題発火
### HTTP DoS (Slow HTTP POST Attack)
```sh
# Note: This Dockerfile uses multi stage build
#       You need to use at least Docker 17.05
$ docker build -t slowhttptest .
$ docker run --rm slowhttptest -B -v 4 -c 300 -l 3600 -u http://10.1.240.102/
```
