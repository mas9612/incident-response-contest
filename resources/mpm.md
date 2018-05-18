# MPM (Multi-Processing Module)

* スレッドやマルチプロセスを使って，同時にたくさんのリクエストを処理してくれるすごいやつ
* 種類
    - prefork: マルチプロセス
    - worker: マルチスレッド
    - event: preforkとworkerのハイブリッド
* 情報危機管理コンテストではpreforkしか使われないと思います

## MPM関連の設定ディレクティブ
* `StartServers` : Apache起動時に作られるプロセス数
* `MaxSpareServers` : アイドル状態（リクエストを処理していないプロセス）のプロセスの最大数
* `MinSpareServers` : アイドル状態のプロセスの最小数
* `MaxRequestWorkers` : 同時に処理できる最大コネクション数
* `MaxConnectionsPerChild` : 各プロセスが処理できるコネクション数．このディレクティブで設定した数のコネクションを処理したら，そのプロセスは終了する
    - ex.) `MaxConnectionsPerChild 10` : 10回リクエストを処理した後，そのプロセスは終了して新しいプロセスが作られる
* `ServerLimit` : （preforkの場合） `MaxRequestWorkers` の最大数． `MaxRequestWorkers` の値を256以上にする場合は，このディレクティブも合わせて設定する必要がある．
* `ListenBacklog` : 処理待ちのコネクションの最大数
