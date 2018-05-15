# Apache Tips

## MPMを確認する
```sh
$ httpd -V | grep MPM
Server MPM:     prefork
```

## ロードされているモジュールを確認する
```sh
$ httpd -M
Loaded Modules:
 core_module (static)
 so_module (static)
 http_module (static)
 mpm_prefork_module (shared)
 authn_file_module (shared)
 authn_core_module (shared)
 authz_host_module (shared)
 authz_groupfile_module (shared)
 authz_user_module (shared)
 authz_core_module (shared)
 access_compat_module (shared)
 auth_basic_module (shared)
 filter_module (shared)
 mime_module (shared)
 log_config_module (shared)
 env_module (shared)
 headers_module (shared)
 setenvif_module (shared)
 version_module (shared)
 unixd_module (shared)
 status_module (shared)
 autoindex_module (shared)
 dir_module (shared)
 userdir_module (shared)
 alias_module (shared)
```

### モジュールのパス
`ServerRoot` + `LoadModule` の3つ目

例)
```
...
ServerRoot  "/usr/local"
...

LoadModule userdir_module libexec/apache24/mod_userdir.so
...
```

`/usr/local/` + `libexec/apache24/mod_userdir.so` = `/usr/local/libexec/apache24/mod_userdir.so`

## 設定ファイルの構文チェック
```sh
$ httpd -t
Syntax OK
```
