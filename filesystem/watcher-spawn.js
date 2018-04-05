/*jshint esversion: 6 */
/*jslint node: true */

'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename) {
    throw new Error('Filename must be provided');
}

fs.watch(filename, ()=> {
    const ls = spawn('ls', ['-l', '-h', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes`);
