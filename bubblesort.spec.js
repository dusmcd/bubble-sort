describe('Bubble Sort', function(){

  it('calls itself n times (recursive)', function(){
    const arr = [5, 3, 7, 8, 10];
    spyOn(window, 'bubbleSort').and.callThrough();
    bubbleSort(arr);
    expect(bubbleSort.calls.count()).toEqual(arr.length);
  })

  it('handles empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles non-array argumnet', function(){
    expect( bubbleSort('hello world') ).toEqual( undefined );
  });
  it('sorts array from lowest to highest', function(){
    expect( bubbleSort([4,5,10,3,1]) ).toEqual( [1,3,4,5,10] );
  });
  it('handles single element array', function(){
    expect( bubbleSort([4]) ).toEqual( [4] );
  });
})
