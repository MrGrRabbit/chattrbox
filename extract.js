const path = require('path');

const extractFilePath = function(url) {
    
    let fileName = 'index.html';
    let filePath;
    if(url.length > 1){
        fileName = url.substring(1);
    }
    console.log('The fileName is: ' + fileName);

    filePath = path.resolve(__dirname, 'app', fileName);
    return filePath;

};

module.exports = extractFilePath;
