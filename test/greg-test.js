const assert = require('chai').assert;
const greg = require('../lib/greg');
const testData = {
    city: 'Oakland',
    team: 'Athletics'
};

describe('greg', function() {

    it('data verify', function() {
        greg(testData, (err, data) => {
            assert.deepEqual(data, {
                city: 'Oakland',
                team: 'Athletics'
            });
        });
    });
});
