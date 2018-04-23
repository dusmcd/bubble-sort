function bubbleSort(arr) {
  const counter = arr.length;
  let ticks = 0;
  if (!Array.isArray(arr)) return;
  while (ticks < counter) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swapping elements
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    ticks++;
  }
  return arr;
}
