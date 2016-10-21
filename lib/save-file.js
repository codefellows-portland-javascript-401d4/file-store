var fs = require('fs');

function saveFile(dir, obj, cb) {
    
    
    if (Array.isArray(obj)) {
        obj.forEach((t, i, arr) => {
            if (i === arr.length -1) {
                fs.writeFile(dir + t.name +'.txt', JSON.stringify(t), 
                cb);
            } else { 
                fs.writeFile(dir + t.name +'.txt', JSON.stringify(t), 
                () => t);
            }
        });
    } else {
        fs.writeFile(dir + obj.name + '.txt', JSON.stringify(obj), cb);
    }
   
}
     



module.exports = saveFile;