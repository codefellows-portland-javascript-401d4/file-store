const assert = require('assert');
const fs = require('fs');
const mcStore = require('../lib/mcStore');

const dresden = {
    name: 'Harry Dresden',
    type: 'Wizard/Winter Knight',
    location: 'Chicago',
    Occupation: 'P.I./Professional Wizard'
};

describe('testing storage', function(){
    it('#stores properly', function(done) {
        const saved = mcStore('./data/dresden.json', JSON.stringify(dresden), (err, id) => {
            console.log(id)
            assert.equal(id, './data/dresden.json');
            done();
        });
    });
});