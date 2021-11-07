// import files system module
const http = require('http');
const fs = require('fs');
const extract = require('./extract');

const handleError = function(err, res) {
    res.writeHead(404);
    res.end();
};
const server = http.createServer(function (req, res){
    console.log('Responding to a request.');
    
    const filePath = extract(req.url);
    fs.readFile(filePath, function(err, data){
        if(err) {
            handleError(err, res);
            res.end(data);
        } 
        else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
        
    });
});

server.listen(3000); // bunding to a port