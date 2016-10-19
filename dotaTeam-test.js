var assert = require('assert');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var dotaTeamToJSON = require('./dotaTeam');

describe('File writer', function() {

  it('Should take object and convert into JSON format', function() {
    var evilGeniuses = {
      teamMembers: ['Arteezy', 'Sumail' ,'Universe', 'Zai', 'Cr1t', ],
      region: 'NA',
      tiWinner: true
    }
    assert(dotaTeamToJSON(evilGeniuses), {"teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true});  
  });

  it('Should store new object in new file with identifier for file name', function() {

  });

});

describe('File retriever', function() {

  it('Should retrieve individual resource by identifier', function() {

  });

  it('Should retrieve list of all resources, ordered by identifier', function() {

  });

});