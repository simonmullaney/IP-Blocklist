#!/bin/bash
echo '*****************************************************************************************'
echo ' Starting IP Blacklist'
echo '*****************************************************************************************'
sudo npm i
pm2 start npm --name IP-Blocklist-Background -- run background
# pm2 --name IP-Blocklist-Background start ./background/retrieveMaliciousIP.ts
pm2 --name IP-Blocklist start npm -- start
echo '*****************************************************************************************'
echo ' Finished IP Blacklist setup'
echo ' Run npm run test to run test suite'
echo '*****************************************************************************************'
