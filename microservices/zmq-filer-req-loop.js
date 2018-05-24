/*jshint esversion: 6 */
/*jslint node: true */

'use strict';
const zmq = require('zeromq');
const filename = process.argv[2];

// create request endpoint
const requester = zmq.socket('req');

// handle replies from the sender
requester.on('message', data => {
    const response = JSON.parse(data);
    console.log('Received response:', response);
});

requester.connect('tcp://localhost:60401');

// send a request for content
for(let i = 1; i <= 5; i++) {
    console.log(`Sending request for ${filename}`);
    requester.send(JSON.stringify({path: filename}));
}
