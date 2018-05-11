# -*- coding: utf-8 -*-

import argparse
import paramiko


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-u', '--user', required=True, help='SSH user')
    parser.add_argument('-p', '--password', required=True, help='SSH password')
    parser.add_argument('--host', required=True, help='SSH login host')
    parser.add_argument('-k', '--key', required=True,
                        help='SSH public key path')
    args = parser.parse_args()

    with open(args.key, 'r') as f:
        pubkey = f.read().strip()

    with paramiko.SSHClient() as ssh:
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(hostname=args.host, port=22, username=args.user,
                    password=args.password)

        command = """
mkdir -p ~/.ssh/;
echo "{}" >> ~/.ssh/authorized_keys;
chmod 700 ~/.ssh;
chmod 600 ~/.ssh/*;
        """.format(pubkey)

        stdin, stdout, stderr = ssh.exec_command(command)


if __name__ == '__main__':
    main()
