const fs = require('fs');

function storeMC(fileName, data, callback) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(fileName);
        callback(null, fileName);
        // return 1;
    })
}

module.exports = storeMC;