const assert = require("node:assert");

test('throw error1', () => {
  try {
    assert.throws(
      () => {
        throw new Error('message 1');
      },
      { message: 'message 2' }
    );
  } catch (err) {
    console.log('The actual error:', err);
    throw err;
  }
});

test('throw error2', () => {
  try {
    assert.throws(() => {
      throw new SyntaxError('message 1');
    }, TypeError);
  } catch (err) {
    console.log('The actual error:', err);
    throw err;
  }
});
