'use strict';

var express = require('express');
var asset = require('./asset');


var configureImageHeaders = function(response, contentType) {
  if (!contentType) {
    contentType = 'image/jpeg';
  }

  response.set({
    'Content-Type': contentType,
    'Cache-Control': 'public, max-age=31536000',
    'Date': new Date().toUTCString(),
    'Expires': new Date(Date.now() + 31536000000).toUTCString()
  });
};

var newApp = function(port) {
  var app = express();

  app.set('port', port);

  app.get('/smallrocket', function(request, response, next) {
    configureImageHeaders(response);
    var dx = 10;
    var dy = 180;
    asset(request)
      .interlace('Line')
      .compress('Jpeg')
      .quality(50)
      .resize(256)
      .stroke("#0c0c0c")
      .fill("#773322")
      .drawCircle(dx + 10, dy + 10, dx + 20, dy + 10)
      .drawCircle(dx + 40, dy + 10, dx + 50, dy + 10)
      .drawCircle(dx + 70, dy + 10, dx + 80, dy + 10)
      .drawCircle(dx + 100, dy + 10, dx + 110, dy + 10)
      .drawCircle(dx + 130, dy + 10, dx + 140, dy + 10)
      .drawCircle(dx + 160, dy + 10, dx + 170, dy + 10)
      .drawCircle(dx + 190, dy + 10, dx + 200, dy + 10)
      .drawCircle(dx + 220, dy + 10, dx + 230, dy + 10)
      .stream( function(err, stdout, stderr) {
        if (err) next(err);
        stdout.pipe(response);

        stderr.on('data', function(err) {
          next('Unable to process the image asset:\n' + err.toString());
        });
      });
  });

  app.get('/health', function(request, response) {
    response.send({
      status: 'Ok'
    });
  });

  return app;
};

module.exports = newApp;
