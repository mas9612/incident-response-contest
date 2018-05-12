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
│       ├── mail
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
│   └── file-permission
└── util
```

## Contest Date
2018/05/xx

## Servers
* Web (FreeBSD)
* DNS (FreeBSD)
* Mail (FreeBSD, CentOS)

## Scenarios
1. [ページ内の画像が表示されない](scenarios/file-permission/README.md)
1. [Webページが開けない](scenarios/dos-attack/README.md)
1. [SSHでログインできない](scenarios/cannot-ssh-login/README.md)
1. [xxxxx](scenarios/xxxxx.md)

## Provisioning
### Prerequisites
* FreeBSD
    - Install python, sudo
    ```sh
    $ pkg install python27 sudo
    ```
    - Edit `/usr/local/etc/sudoers` with `visudo` to be able to use `sudo`
