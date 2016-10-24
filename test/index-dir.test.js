const indexDir = require('./index-dir');
const assert = require('assert');
const fs = require('fs');

it('writes directory list', done => {
    const callback = (err) => {
        if(err) {
            return done(err);
        }
        fs.readFile('./test-dir/index.txt', 'utf-8', (err, index) => {
            assert.equal(index, 'bar.txt\nfoo.txt\nqux.txt');
            done();
        });
    };

    indexDir('./test-dir', callback);
});

it('writes directory list take 2', done => {
    indexDir('./test-dir', (err) => {
        if(err) {
            return done(err);
        }
        const index = fs.readFileSync('./test-dir/index.txt', 'utf-8');
        assert.equal(index, 'bar.txt\nfoo.txt\nqux.txt');
        done();
    });
});