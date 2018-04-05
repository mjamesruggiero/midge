/*jshint esversion: 6 */
/*jslint node: true */

'use strict';

const fs = require('fs');
const filename = process.argv[2];
if (!filename) {
    throw Error('File to watch must be specified');
}
fs.watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Now watching ${filename} for changes`);

