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

// it('writes directory list', done => {
//     const callback = (err) => {
//         if(err) {
//             return done(err);
//         }
//         fs.readFile('./test-dir/index.txt', 'utf-8', (err, index) => {
//             assert.equal(index, 'bar.txt\nfoo.txt\nqux.txt');
//             done();
//         });
//     };

//     indexDir('./test-dir', callback);
// });

// it('writes directory list take 2', done => {
//     indexDir('./test-dir', (err) => {
//         if(err) {
//             return done(err);
//         }
//         const index = fs.readFileSync('./test-dir/index.txt', 'utf-8');
//         assert.equal(index, 'bar.txt\nfoo.txt\nqux.txt');
//         done();
//     });
// });