const assert = require('chai').assert;
const greg = require('../lib/greg');
const testData = {
  team: 'Oakland Athletics',
  league: 'American'
};

describe('greg', function() {

  it('data verify', function() {
    greg(testData, (err, data) => {
      assert.deepEqual(data, {
        team: 'Oakland Athletics',
        league: 'American'
      });
    });
  });
});