var assert = require('assert');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
const fs = require('fs');
var fileStore = require('./dotaTeam');

describe('File writer', function() {
      var newTeam = {
      teamName: 'Evil Geniuses',
      teamMembers: ['Arteezy', 'Sumail' ,'Universe', 'Zai', 'Cr1t'],
      region: 'NA',
      tiWinner: true
    }

  it('Should take object and convert into JSON format', function() {
    assert(fileStore.dotaTeamToJSON(newTeam), {"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true});  
  });

  it('Should store new object in new file with identifier for file name', function(done){
    rimraf('./dotaTeams/*', function(err) {
      if (err) {throw err;}
      fileStore.createFile(newTeam, function(err) {
          if (err) return done(err);
          fs.readFile('./dotaTeams/evilgeniuses.json', 'utf8', (err, data) => {
            assert.equal(data, '{"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true}');
            done();
        });
      });
    });
  });
});

describe('File retriever', function() {

  it('Should retrieve individual resource by identifier', function(done) {
    fileStore.fetchFile('evilgeniuses', function(err, data) {
      if (err) return done(err);
      console.log(data);
      assert.equal(data, '{"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true}');
      done();
    });
  });

  it('Should retrieve list of all resources, ordered by identifier', function() {

  });

});