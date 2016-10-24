const getDirContents = require('./get-dir-conts');
const assert = require('assert');
const fs = require('fs');

it('gets all file contents', done => {
    getDirContents('./test-dir', (err, contents) => {
        if(err) return done(err);

        assert.deepEqual(
            contents,
            ['bar', 'foo', 'qux']
        );

        done();
    });
});