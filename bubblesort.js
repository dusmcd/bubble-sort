function bubbleSort(arr) {
  let isSwapped = true;

  if (!Array.isArray(arr)) return;

  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swapping elements
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        isSwapped = true;
      }
    }
  }
  return arr;
}
