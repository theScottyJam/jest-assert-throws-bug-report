const assert = require("node:assert");

try {
  assert.throws(
    () => {
      throw new Error("message 1");
    },
    { message: "message 2" }
  );
} catch (err) {
  console.error(err);
}

try {
  assert.throws(() => {
    throw new SyntaxError("message 1");
  }, TypeError);
} catch (err) {
  console.error(err);
}
