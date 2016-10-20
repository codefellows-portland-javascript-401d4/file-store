const assert = require('assert');
// const fs = require('fs');
const mainCharacter = require('../lib/mainCharacter');

// test data to use
const dresden = {
    name: 'Harry Dresden',
    type: 'Wizard/Winter Knight',
    location: 'Chicago',
    Occupation: 'P.I./Professional Wizard'
};

const tavi = {
    name: 'Gaius Octavius',
    type: 'Crafter',
    location: 'Alera',
    Occupation: 'First Lord'
};

const jane = {
    name: 'Jane Yellowrock',
    type: 'Shapeshifter',
    location: 'New Orleans',
    Occupation: 'Vampire Hunter'
};

// Set up for tests

// Run tests
describe('testing storage', function(){
    it('#stores an object properly', function(done) {
        // store an object
        mainCharacter.storeMC(dresden, (err, id) => {
            assert.equal(id, 'harry_dresden');
            done();
        });
    });

    it('#pull an object out', function(done) {
        // retrieve object using id
        mainCharacter.getMC('harry_dresden', (err, data) => {
            assert.deepEqual(data, dresden);
            done();
        });
    });

});