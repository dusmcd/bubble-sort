describe('Split array function', function() {
  it('is able to split an array into two arrays', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('splits an array with 2 elements into 2 arrays of 1 element each', function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  // test for odd number of elements
  it('handles odd number of elements', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});
