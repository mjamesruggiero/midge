/*jshint esversion: 6 */
/*jslint node: true */

'use strict';

const fs = require('fs');
fs.writeFile('/tmp/target.txt', 'hello world', (err) => {
    if (err) {
        throw err;
    }
    console.log('file saved!');
});
