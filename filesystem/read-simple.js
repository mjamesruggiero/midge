/*jshint esversion: 6 */
/*jslint node: true */

'use strict';
const fs = require('fs');
fs.readFile('watcher.js', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});
