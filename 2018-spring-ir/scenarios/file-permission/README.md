# ページ内の画像が表示されない

## 概要
先程作成したページ内にある画像が表示されない

## 対象ユーザ
ホスティングサーバの利用者: `kobayasi`

## 対象サーバ
Bravo (FreeBSD)

## 問題の原因
小林さんが新しく作成したHTMLと画像をサーバにアップする際に，パーミッション設定が適切でなかった．
otherに読み取り権限が付与されていなかったため，Apacheのデーモンがファイルを読めなかった．
そのため，ブラウザ上に画像が表示されなかった．

## 対応
* 画像のパーミッションを適切なものに修正する
    - `0644` 等，otherに読み取り権限を付与する
    - `chmod o+r` とか

## 問題発火
```sh
ansible-playbook -i hosts --ask-pass playbook.yml
```
