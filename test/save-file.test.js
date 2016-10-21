var saveFile = require('../lib/save-file');
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');

describe('save-file', function(){
    var trees =  [{name: 'maple', deciduous: true, age: 50},
                 {name: 'oak', deciduous: false, age: 150},
                 {name: 'pine', deciduous: false, age: 20},];
    var dirPath = './tree-dir/';

    before(function(done){
        rimraf(dirPath, () => {
            mkdirp(dirPath,done);
        });
        
    });

    after(function(done){rimraf(dirPath, done);});

    it('saves files in tree-dir', function(done){
        var callback = function() {
            fs.readdir(dirPath, function(err, files){
                if (err) return done(err);
                var dirContents = files.filter(f => (f !== 'index.txt'));
                assert.deepEqual(dirContents, ['maple.txt', 'oak.txt', 'pine.txt']);

                done();
            });
        };
        saveFile(dirPath, trees, callback);
    });

    it('saves file as JSON', function(done){
        var callback = function(err) {
            if (err) return done(err);
            fs.readFile(dirPath + 'maple.txt', 'utf-8', function(err, data) {
                if (err) return done(err);
                assert.deepEqual(JSON.parse(data), trees[0]);
                done(); 
            });
           
        };
       
        saveFile(dirPath, trees, callback);
    });

});