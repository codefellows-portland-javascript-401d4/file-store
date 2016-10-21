const assert = require('chai').assert;
const write = require('../lib/file_write');

const testData = {
  team: 'Athletics',
  city: 'Oakland',
  league: 'American'
};


describe('write data', function() {

  it('data verify', function() {
    write(testData, (err, data) => {
      assert.deepEqual(data, {
        team: 'Athletics',
        city: 'Oakland',
        league: 'American'
      }
      );
    });
  });
});
