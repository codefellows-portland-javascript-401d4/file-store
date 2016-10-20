const fs = require('fs');
const path = require('path');
var fileStore = {};

fileStore.dotaTeamToJSON = function(teamObj) {
  return JSON.stringify(teamObj);
}

fileStore.createFile = function(teamObj, callback) {
  var teamPath = teamObj.teamName.split(' ').join('').toLowerCase();
  var filePath = path.join('./dotaTeams', teamPath);
  filePath += '.json';
  var teamJSON = fileStore.dotaTeamToJSON(teamObj);
  fs.writeFile(filePath, teamJSON, 'utf8', function(err) {
    if (err) return callback(err);
    callback(err);
  });
}

fileStore.fetchFile = function(teamName, callback) {
  var fetchPath = teamName + '.json';
  fetchPath = './dotaTeams/' + fetchPath;
  fs.readFile(fetchPath, 'utf-8', (err, data) => {
    if (err) throw err;
    callback(err, data);
  });
}

fileStore.fetchDir = function(dir, callback) {
  fs.readdir(dir, 'utf8',function(err, files){
    if (err) throw err;
    callback(err, files);
  })
}
var dc = {
  teamName: 'Digital Chaos',
  teamMembers: ['Resolut1on', 'w33', 'MoonMeander', 'MiSeRy', 'Saksa'],
  region: 'NA',
  tiWinner: false
};

fileStore.createFile(dc, function(){});

module.exports = fileStore;

