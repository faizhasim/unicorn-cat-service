var gm = require('gm');

var baseUrl = function() {
  return "./lib/unicorn-cat.jpg";
};

var asset = function() {
  return gm(baseUrl());
};

module.exports = asset;