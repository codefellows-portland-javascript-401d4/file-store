const assert = require('assert');
const mainCharacter = require('../lib/mainCharacter');
const rimraf = require('rimraf');

// test data to use
const dresden = {
    name: 'Harry Dresden',
    type: 'Wizard/Winter Knight',
    location: 'Chicago',
    Occupation: 'P.I./Professional Wizard',
    NbrBooks: 15
};

const tavi = {
    name: 'Gaius Octavius',
    type: 'Crafter',
    location: 'Alera',
    Occupation: 'First Lord',
    NbrBooks: 5
};

const jane = {
    name: 'Jane Yellowrock',
    type: 'Shapeshifter',
    location: 'New Orleans',
    Occupation: 'Vampire Hunter',
    NbrBooks: 5
};

// Set up for tests

// Run tests
describe('testing storage', function(){
    after(function(cb){
        rimraf('./data', cb)
    })
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

    it('#sorts the data pulled out', function(done) {
        //retreive and sort data

        // store the other two objects into files.
        mainCharacter.storeMC(tavi, (err, id) => {});
        mainCharacter.storeMC(jane, (err, id) => {});

        // now get all the files in a sorted order
        const testRtn = [tavi, dresden, jane];
        mainCharacter.getAllSortedMC( (err, data) => {
            assert.deepEqual(data, testRtn);
            done();
        });
    });
});