## IP-Blocklist
A Node.js Express API that manages a blocklist of IPs. This project pulls a daily list of blacklisted IP addresses from [IPsum](https://github.com/stamparm/ipsum). This is a public list, which gets updated every 24hrs.

## Getting started

To start the project run:
`bash start.sh`

To stop the project run:
`bash stop.sh`

To test the project run:
`mocha test/test.js`


## IP-Blocklist features


- API cache implemented for queries using [memory-cache](https://www.npmjs.com/package/memory-cache) for similar queries made within 20 seconds of each other


A written explanation of the design choices you made, and how it meets both the functional and non-functional requirements.

## Design choices

- Process to pull [Ip list](https://github.com/stamparm/ipsum) is run as a background process which pulls a new IP list daily at 0800 UTC. This was implemented instead of pulling the file on every request to improve API response time.

## Improvements:

- More thorough testing required. Better presentation of test results.
