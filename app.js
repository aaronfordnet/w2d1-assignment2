var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response received:', response.statusCode + ' ' + response.statusMessage + '\n' + 'Content type: ' + response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
