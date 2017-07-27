let assert = require('assert');
import Add from '../src/add';


describe('Add', function () {
  it('Should return 10', function () {
    assert.equal(10 , Add(5, 5));
  });
});
