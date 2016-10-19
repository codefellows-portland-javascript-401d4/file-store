const fs = require('fs');
const path = require('path');
var fileStore = {};

fileStore.dotaTeamToJSON = function(teamObj) {
  return JSON.stringify(teamObj);
}

fileStore.createFile = function(teamObj, callback) {
  var teamPath = teamObj.teamName.split(' ').join('');
  var filePath = path.join('./dotaTeams', teamPath);
  filePath += '.json';
  var teamJSON = fileStore.dotaTeamToJSON(teamObj);
  fs.writeFile(filePath, teamJSON, 'utf8', function(err) {
    if (err) return callback(err);
    callback();
  });
}


module.exports = fileStore;

