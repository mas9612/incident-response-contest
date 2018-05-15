# Webページがなかなか開かない

## 概要
Webページ（ `bravo` , FreeBSD）にアクセスしてからページがなかなか表示されない

## 対象ユーザ
* DNSサーバ利用者全員

## 報告者
* CEO
    - 複数の社員から，Webページにアクセスしてからページがなかなか表示されないという報告があった

## 対象サーバ
* `bravo` (FreeBSD)
* `victor` (CentOS)

## 問題の原因
* DNSサーバがDNS Flood攻撃を受けているため，名前解決に時間がかかってページの表示までに時間がかかっていた

## 対応
### DNS Flood対策
* DNS Flood攻撃を行っているホストからの通信をファイアウォールで遮断する

## 問題発火
### DNS Flood
```sh
$ sudo ./dnsflood asdf.asdf.asdf.asdf.com TARGETIP -t ANY -s 10.1.240.123 -p 53
```
