const write = require('../lib/write-to-file');
const assert = require('chai').assert;

const testData = {
    teamName: 'Spurs',
    city: 'San Antonio',
    conference: 'Western'
};

it('writes the file', done => {
    write(testData, (err, contents) => {
        if (err) {
            return done(err);
        }
        assert.deepEqual(contents, testData);
        done();
    });
});