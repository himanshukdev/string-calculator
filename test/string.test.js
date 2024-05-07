const assert = require("assert");

const StringCalculator = require("../stringCalculator");

describe("TestTDD", () => {
  describe("String Calculator", () => {
    beforeEach(() => {
      this.stringCalc = new StringCalculator();
    });

    it("Calculate empty string", () => {
      assert.strictEqual(this.stringCalc.calculate(""), 0);
    });
  });
});
