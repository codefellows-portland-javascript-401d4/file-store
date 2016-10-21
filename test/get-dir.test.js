var getDir = require('../lib/get-dir');
var assert = require('assert');
var fs = require('fs');

describe('get-dir', function() {
    var trees = [{name: "maple", deciduous: true, age: 50},
                 {name: "oak", deciduous: false, age: 150},
                 {name: "pine", deciduous: false, age: 20},]
    var path = 'tree-dir/';            
    it('gets all file contents', function(done) {
        assert.deepEqual(getDir(path, done), trees)
        done(); 
    })

    it('returns an array', done => {
        assert.deepEqual(Array.isArray(getDir(path, done)), true);
        done();
    })
})