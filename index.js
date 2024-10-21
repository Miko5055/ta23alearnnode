/*
//const fs = require('fs');                    // commonjs

import fs from 'fs';                           // es module
fs.writeFileSync('test.txt', 'Hellow World!');


const common = require('./common.js');
common.hello();
import es from './es.js';
es.hello();
*/

import boxen from "boxen";

console.log(boxen('unicorn', {padding: 1}))