var saveFile = require('../lib/save-file');
var assert = require('assert');
var fs = require('fs');
// var rimraf = require('rimraf');
// var mkdirp = require('mkdirp');

describe('save-file', function(done){
    var trees = [{name: "oak", deciduous: false, age: 150},
                 {name: "pine", deciduous: false, age: 20},
                 {name: "maple", deciduous: true, age: 50}]
    var dirPath = 'tree-dir/';

    it('saves files in tree-dir', function(done){
        var callback = function(err) {
            fs.readdir(dirPath, function(err, files){
                if (err) return done(err);
                var dirContents = files.filter(f => (f !== 'index.txt'));
                assert.deepEqual(dirContents, [oak.txt]);

                done();
            })
        }
        trees.forEach((t, index, arr) => {
            if (index === arr.lenth - 1) {
                saveFile(dirPath, t, callback)
            } else {
                saveFile(dirPath, t, console.log('Tree Index: ', index));
            }
        })    
        
    })

    it('saves file as JSON', function(done){
        var callback = function(err) {
            if (err) return done(err);
            fs.readFile(dirPath + oak.txt, 'utf-8', function(err, data) {
                if (err) return done(err);
                assert.deepEqual(JSON.parse(data), trees[0])
            })
            done();
        }

        saveFile(dirPath, trees[0], callback);
    })

})