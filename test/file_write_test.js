const assert = require('chai').assert;
const write = require('../lib/file_write');

const testData = {
  team: 'Athletics',
  city: 'Oakland',
  league: 'American'
};

it('writes file', done => {

  write(testData, (err, contents) => {
    if (err) return done(err);

    assert.deepEqual(contents, testData);
    done();
  });

});
