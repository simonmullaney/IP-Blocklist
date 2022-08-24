#!/bin/bash
echo '*****************************************************************************************'
echo ' Starting IP Blacklist'
echo '*****************************************************************************************'
sudo npm i
pm2 start npm --name IP-Blocklist-Background -- run background
pm2 --name IP-Blocklist start npm -- start
echo '*****************************************************************************************'
echo ' Finished IP Blacklist setup'
echo ' Run `mocha test/test.js` to run test suite'
echo '*****************************************************************************************'
