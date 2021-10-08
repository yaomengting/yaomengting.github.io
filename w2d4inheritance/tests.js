describe("filter", function () {
  it("return filtered array without a list of banned words", function () {
    assert.equal(
      "This house is",
      "This house is not nice".filter(["not", "nice"])
    );
  });
});

describe("bubble sort", function () {
  it("return a sorted array using algorithms", function () {
    assert.deepEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 6, 5, 4].bubbleSort());
  });
});

describe("inheritance", function () {
  it("create new object and gave it function", function () {
    var him = new Teacher();
    him.initialize("Adam", 45);
    assert.equal("Adam is now teaching Inheritance", him.teach("Inheritance"));
  });
});
