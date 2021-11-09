// import files system module
const http = require('http');
const fs = require('fs');
const extract = require('./extract');
const { reset } = require('nodemon');
const wss = require('./websockets-server');

const handleError = function(err, res) {
    const filePath = '/app/error.html';
    res.writeHead(404);
    res.end("<h1>Error: 404!</h1>"); // Как отобразить страницу app/error.html
};
const server = http.createServer(function(req, res) {
    console.log('Responding to a request.');
    
    const filePath = extract(req.url);
    fs.readFile(filePath, function(err, data) {
        if(err) {
            handleError(err, res);
            return;
        } 
        else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

server.listen(3000); // 