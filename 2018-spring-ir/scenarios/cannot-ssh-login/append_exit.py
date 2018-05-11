# -*- coding: utf-8 -*-

import argparse
import paramiko


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-u', '--user', required=True, help='SSH user')
    parser.add_argument('-k', '--key', required=True, help='SSH private key')
    parser.add_argument('--host', required=True, help='SSH login host')
    args = parser.parse_args()

    with paramiko.SSHClient() as ssh:
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(hostname=args.host, port=22, username=args.user,
                    key_filename=args.key)

        stdin, stdout, stderr = ssh.exec_command(
            '`tail -1 ~/.bashrc | grep exit`;'
            'if [ -n `tail -1 ~/.bashrc | grep exit` ]; then '
            'echo "appending..."; echo "exit" >> ~/.bashrc;'
            'echo "done"; fi'
        )

        print('[INFO] stderr:')
        for line in stderr:
            print(line)


if __name__ == '__main__':
    main()
