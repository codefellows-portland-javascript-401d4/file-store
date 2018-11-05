const dirRead = require('../lib/dir_read');
const assert = require('chai').assert;
const dir = 'data/';

// current unsortedData = [ '{"team":"Pirates","city":"Pittsburgh","league":"National"}',
//   '{"team":"Cubs","city":"Chicago","league":"National"}',
//   '{"team":"White Sox","city":"Chicago","league":"American"}' ]

const expectedSort = ['{"team":"Athletics","city":"Oakland","league":"American"}','{"team":"Cubs","city":"Chicago","league":"National"}',
  '{"team":"Pirates","city":"Pittsburgh","league":"National"}',
  '{"team":"White Sox","city":"Chicago","league":"American"}' ];

it('gets all file contents, sorted', done => {

  dirRead(dir, (err, contents) => {
    if (err) return done(err);

    assert.deepEqual(contents,expectedSort);
    done();
  });

});
