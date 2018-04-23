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

describe('Merge array function', function(){
  it('takes two sorted arrays, and merges them into one sorted array' ,
  function() {
    expect(merge([7, 8, 10], [13, 15 ,16])).toEqual([7, 8,10, 13, 15, 16])
  });
  it('sorts large range', function() {
    expect(merge([9, 35, 90], [2, 40, 75])).toEqual([2, 9, 35, 40, 75, 90])
  })
});
