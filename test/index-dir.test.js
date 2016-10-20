var indexDir = require('../lib/index-dir');
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');


// after(function(err) {
//         rimraf.sync('tree-dir/index.txt');
//         rimraf.sync('tree-dir/*.json');
//     })

describe('index-dir', function(){
    var tree1 = {name: "oak", deciduous: false, age: 150}
    var tree2 = {name: "pine", deciduous: false, age: 20}
    var tree3 = {name: "maple", deciduous: true, age: 50}
    var dirPath = 'tree-dir/';
    
    

    
    it('writes directory list in index file', function(done){
        var callback = function(err) {
            if (err) return done(err);
            var index = fs.readFileSync(dirPath + 'index.txt', 'utf-8');
            assert.equal(index, 'oak.txt\npine.txt\nmaple.txt');
           
            done();
        }
        indexDir('./tree-dir/', callback);
    })
})