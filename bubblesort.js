function bubbleSort(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swapping elements
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
      console.log('arr: ', arr);
    }
    return bubbleSort(arr.slice(0, arr.length - 1));
  }

  // return arr;
}
