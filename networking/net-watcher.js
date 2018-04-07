/*jshint esversion: 6 */
/*jslint node: true */

'use strict';
const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    throw new Error('No filename specified');
}

net.createServer(connection => {
    // reporting
    console.log('Subscriber connected');
    connection.write(`Now watching ${filename} for changes..\n`);


    // set up watcher
    const watcher =
          fs.watch(filename, ()=> connection.write(`File changed, new date: ${new Date()}\n`));

    // cleanup
    connection.on('close', ()=> {
        console.log('Disconnected');
        watcher.close();
    });

}).listen(60300, ()=> console.log('Listening for subscribers...'));
