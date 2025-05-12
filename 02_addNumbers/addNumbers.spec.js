const addNumbers = require('./addNumbers.js')

describe('addNumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});
