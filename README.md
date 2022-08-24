## IP-Blocklist
A Node.js Express API that manages a blocklist of IPs. This project pulls a daily list of blacklisted IP addresses from [IPsum](https://github.com/stamparm/ipsum). This is a public list, which gets updated every 24hrs.

## Getting started

To start the project, run:
`bash start.sh`

To stop the project, run:
`bash stop.sh`

To test the project, run:
`mocha test/test.ts`

## Logging
To view logs for backend process, run:
`pm2 logs IP-Blocklist-Background --lines 1000`

To view logs for API process, run:
`pm2 logs IP-Blocklist --lines 1000`

## Design choices

- Process to pull [Ip list](https://github.com/stamparm/ipsum) is run as a background process which pulls a new IP list daily at 0700 UTC. This was implemented instead of pulling the file on every request to improve API response time.
- API cache implemented for queries using [memory-cache](https://www.npmjs.com/package/memory-cache) for similar queries made within 60 seconds of each other.

## Improvements:

- More thorough testing required. Better presentation of test results.
- Detailed code review.
