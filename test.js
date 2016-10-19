var assert = require('chai').assert;
var fs = require('fs');
var store = require('./lib/store');

describe('store', () => {
    it('just checks whether we can call the api', done => {
        fs.readdir('./cats', (err, files) => { console.log(files);});
        done();
    });
});