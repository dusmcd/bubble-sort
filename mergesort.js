function split(wholeArray) {
  const splitPoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, splitPoint);
  const secondHalf = wholeArray.slice(splitPoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let newArray = [];
  let head1 = 0;
  let head2 = 0;

  while (arr1[head1] || arr2[head2]) {
    if (arr1[head1] < arr2[head2] || !arr2[head2]) {
      newArray.push(arr1[head1]);
      head1++;
    } else if (arr2[head2] < arr1[head1] || !arr1[head1]) {
      newArray.push(arr2[head2]);
      head2++;
    }
  }
  return newArray;
}
