var fs = require('fs');

const testData = {
    city: 'Oakland',
    team: 'Athletics'
};

fs.writeFile( 'data/testData.json', JSON.stringify( testData ), 'utf8', (err) => {
    if (err) throw err;
});
