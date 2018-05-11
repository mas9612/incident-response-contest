# 2018 Spring Incident Response Contest (2nd)

## Directory
* `scenarios/` : description of each scenario
* `provisioning/` : server provisioning scripts
    - `hosts` : target hosts
    - `roles/` : Ansible roles
```
.
├── README.md
├── provisioning
│   ├── hosts
│   ├── roles
│   │   ├── common
│   │   │   ├── main.yml
│   │   │   └── templates
│   │   │       └── selinux.config
│   │   ├── dns
│   │   │   ├── main.yml
│   │   │   └── templates
│   │   ├── mail
│   │   │   ├── main.yml
│   │   │   └── templates
│   │   └── web
│   │       ├── main.yml
│   │       └── templates
│   └── site.yml
└── scenarios
```

## Date
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
