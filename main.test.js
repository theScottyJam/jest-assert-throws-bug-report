const assert = require('node:assert');

test('test1', () => {
  assert.throws(
    () => { throw new Error('message 1' ); },
    { message: 'message 2' }
  );
});

test('test2', () => {
  assert.throws(
    () => { throw new SyntaxError('message 1' ); },
    TypeError
  );
});