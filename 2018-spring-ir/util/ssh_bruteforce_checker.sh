#!/bin/bash

cd `dirname $0`

CANTCRACK="hayashi inoue kojima nishino satou takei yamamoto"
CANCRACK="kobayashi shiraishi tanaka"
HOST=10.1.240.102

PASSLIST=../scenarios/cannot-ssh-login/password_list.txt

echo "Brute Force Checker\n"

echo "Should not be cracked:"
echo $CANTCRACK

echo "\nShould be cracked:"
echo $CANCRACK

echo "\n\nChecking users that should be cracked..."
for user in $CANCRACK; do
    PASS=`hydra -l ${user} -t 4 -P ${PASSLIST} $HOST ssh | grep -E '^.*login.*password' | awk '{print $7}'`

    if [ -z "$PASS" ]; then
        echo "[ERROR] Can't crack ${user}'s password"
    fi
done

echo "\n\nChecking users that should not be cracked..."
for user in $CANTCRACK; do
    PASS=`hydra -l ${user} -t 4 -P ${PASSLIST} $HOST ssh | grep -E '^.*login.*password' | awk '{print $7}'`

    if [ -n "$PASS" ]; then
        echo "[ERROR] ${user}'s password is cracked"
    fi
done
