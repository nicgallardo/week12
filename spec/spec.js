var code = require('../monday.js')

describe("intersect", function() {
  it("returns the intersecting numbers in each array", function() {
    expect(code.intersect([1,2,3,4,5], [3,4,7,8,9])).toEqual([3, 4]);
  });
  it("returns an empty array if there are no interecting numbers", function() {
    expect(code.intersect([1, 3, 5, 7], [2, 4, 6])).toEqual([]);
  });
  it("returns an empty array if there are no elements in the arrays passed", function () {
    expect(code.intersect([], [])).toEqual([]);
  })
});
