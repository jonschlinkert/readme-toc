/**
 * readme-toc <https://github.com/jonschlinkert/readme-toc>
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var file = require('fs-utils');
var mdtoc = require('marked-toc');


var start = '<!-- toc -->\n';
var stop  = '\n<!-- toc stop -->';
var clean = /<!-- toc -->[\s\S]+<!-- toc stop -->/;

var toc = module.exports = function(readme) {
  var content = file.readFileSync(readme);

  // Remove the existing TOC
  content = content.replace(clean, start);

  // Generate the new TOC
  var table = start + mdtoc(content) + stop;
  content = content.replace(start, table);

  // Re-write the README.
  file.writeFileSync(readme, content);
};