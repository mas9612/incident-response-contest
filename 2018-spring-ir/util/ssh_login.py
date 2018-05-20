# -*- coding: utf-8 -*-

import argparse
import paramiko


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', required=True, help='HTTP host')
    args = parser.parse_args()

    users = [
        {'name': 'hayashi', 'pass': 'jafb7537am'},
        {'name': 'inoue', 'pass': 'Co39ke117426'},
        {'name': 'kobayasi', 'pass': '865f4db6cf'},
        {'name': 'kojima', 'pass': 'alesdfaxb1_NOBLE'},
        {'name': 'nishino', 'pass': 'fuckme3n_troy'},
        {'name': 'satou', 'pass': 'diaz107asdf929'},
        {'name': 'shiraishi', 'pass': 'awachan4410'},
        {'name': 'takei', 'pass': 'coppebansr2222'},
        {'name': 'tanaka', 'pass': 'smm4liasdlfe'},
        {'name': 'yamamoto', 'pass': 'c8aeoaiweu3z'},
    ]

    for user in users:
        with paramiko.SSHClient() as ssh:
            ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            ssh.connect(hostname=args.host, port=22, username=user['name'],
                        password=user['pass'], look_for_keys=False)
            stdin, stdout, stderr = ssh.exec_command('id')
            for line in stdout:
                print(line)


if __name__ == '__main__':
    main()
