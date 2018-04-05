/*jshint esversion: 6 */
/*jslint node: true */

'use strict';
require('fs').createReadStream(process.argv[2])
    .on('data', chunk => process.stdout.write(chunk))
    .on('error', err => process.stderr.write(`Error! ${err.message}\n`));
