describe("sum", function () {
  it("takes a num array, and returns the sum of all integers", function () {
    assert.equal(12, sum([3, 4, 5]));
  });
});

describe("multiply", function () {
  it("take an integer array, and multiplies all the numbers ", function () {
    assert.equal(60, multiply([3, 4, 5]));
  });
});

describe("filterLongWords", function () {
  it("takes an array of words and an integer i and returns the array of words that are longer than i.", function () {
    assert.deepEqual(
      ["apple", "programming"],
      filterLongWords(["apple", "programming", "ice"], 4)
    );
  });
});

describe("reverse", function () {
  it("computes the reversal of a string", function () {
    assert.equal("elppa", reverse("apple"));
  });
});
