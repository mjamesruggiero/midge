/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

const fs = require('fs');
fs.watch('target.txt', () => console.log('File changed!'));
console.log('Now watching target.txt for changes...');
