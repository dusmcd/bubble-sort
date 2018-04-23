function split(wholeArray) {
  const splitPoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, splitPoint);
  const secondHalf = wholeArray.slice(splitPoint);

  return [firstHalf, secondHalf];
}
