

describe("filter", function () {
  it("return a array", function () {
    assert.equal(
      'This house is',
      "This house is not nice".filter(["not", "nice"])
    );
  });
});
