# 2018 Spring Incident Response Contest (2nd)

## Directory
* `scenarios/` : description of each scenario
* `provisioning/` : server provisioning scripts
    - `hosts` : target hosts
    - `roles/` : Ansible roles
```
.
├── provisioning
│   └── roles
│       ├── common
│       │   ├── tasks
│       │   └── templates
│       ├── dns
│       │   ├── tasks
│       │   └── templates
│       └── web
│           ├── tasks
│           └── templates
│               └── http_contents
│                   ├── hayashi
│                   ├── inoue
│                   ├── kobayasi
│                   ├── kojima
│                   ├── nishino
│                   ├── satou
│                   ├── shiraishi
│                   ├── takei
│                   ├── tanaka
│                   └── yamamoto
├── scenarios
│   ├── cannot-ssh-login
│   ├── dos-attack
│   │   ├── dns-flood
│   │   │   └── dns-flood-docker
│   │   └── slow-http-post
│   │       └── slowhttptest-docker
│   └── file-permission
└── util
```

## Contest Date
2018/05/21 Mon, 18:00-

## Servers
* Web (FreeBSD, CentOS)
    - FreeBSD: `bravo`
    - CentOS: `victor`
* DNS (FreeBSD)

## Scenarios
1. [ページ内の画像が表示されない](scenarios/file-permission/README.md)
1. [Webページが開けない](scenarios/dos-attack/slow-http-post/README.md)
1. [SSHでログインできない](scenarios/cannot-ssh-login/README.md)

## Bootstrapping
* CentOS (CentOS 7)
    - KickStart script
    - https://www.firefly.kutc.kansai-u.ac.jp/~k800123/180510-ir-anaconda-ks.cfg
        - can access from only seminar network

## Provisioning
### Prerequisites
* FreeBSD
    - Install python, sudo
    ```sh
    $ pkg install python27 sudo
    ```
    - Edit `/usr/local/etc/sudoers` with `visudo` to be able to use `sudo`
