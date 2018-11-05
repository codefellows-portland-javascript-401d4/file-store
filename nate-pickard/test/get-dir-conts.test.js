const getDirContents = require('../lib/get-dir-conts');
const dir = 'data/';
const assert = require('chai').assert;


const expectedSort = ['{"teamName":"Bulls","city":"Chicago","conference":"Eastern"}',
                      '{"teamName":"Spurs","city":"San Antonio","conference":"Western"}',
                      '{"teamName":"Trail Blazers","city":"Portland","conference":"Western"}'];

it('gets all of the sorted file contents', done => {
    getDirContents(dir, (err, contents) => {
        if(err) {
            return done(err);
        }

        assert.deepEqual(contents,expectedSort);
        done();
    });
});