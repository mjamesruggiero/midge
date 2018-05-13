/*jshint esversion: 6 */
/*jslint node: true */

'use strict';
const fs = require('fs');
const zmq = require('zeromq');
const filename = process.argv[2];

// create the publisher endpoint
const publisher = zmq.socket('pub');

fs.watch(filename, () => {
    //send message to any and all subscribers
    publisher.send(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
    }));
});


// listen on TCP port 60400
publisher.bind('tcp://*:60400', err => {
    if(err) {
        throw err;
    }
    console.log('Listening for zmq subscribers');
});
