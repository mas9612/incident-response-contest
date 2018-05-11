# -*- coding: utf-8 -*-

import argparse
import requests
import sys


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', required=True, help='HTTP host')
    args = parser.parse_args()

    users = [
        'hayashi',
        'inoue',
        'kobayasi',
        'kojima',
        'nishino',
        'satou',
        'shiraishi',
        'takei',
        'tanaka',
        'yamamoto',
    ]
    baseuri = 'http://{}/~{}/'

    print('Checking...')

    for user in users:
        uri = baseuri.format(args.host, user)

        print('Getting {}'.format(uri))
        res = requests.get(uri)
        if res.status_code != 200:
            print('[ERROR] Status code is not 200 for user "{}"'.format(user),
                  file=sys.stderr)

    print('Done')


if __name__ == '__main__':
    main()
