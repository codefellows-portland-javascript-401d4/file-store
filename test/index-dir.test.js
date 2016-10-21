var indexDir = require('../lib/index-dir');
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');


// before(err => {
//     if (err) return err;
//     rimraf('tree-dir/')
// })


describe('index-dir', function(){
   
    var trees = [{name: 'oak', deciduous: false, age: 150},
                 {name: 'pine', deciduous: false, age: 20},
                 {name: 'maple', deciduous: true, age: 50}];
    var dirPath = './tree-dir/';

    before(function(done){
        rimraf(dirPath, () => {
            mkdirp(dirPath, () => {
                trees.forEach(f => {
                    fs.writeFileSync(dirPath + f.name +'.txt', JSON.stringify(f));
                });
                done();
            });
        });
    });

    after((done) => {rimraf(dirPath, done);});
   

    
    it('writes directory list in index file', function(done){
        var callback = function(err) {
            if (err) return done(err);
            var index = fs.readFileSync(dirPath + 'index.txt', 'utf-8');
            assert.equal(index, 'maple.txt\noak.txt\npine.txt');
        
            done();
        }
        indexDir('./tree-dir/', callback);
    })
})