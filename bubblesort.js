function bubbleSort(arr) {
  const counter = arr.length;
  let ticks = 0;

  do {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swapping elements
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    ticks++;
  } while (ticks < counter);

  console.log(arr)
  return arr;
}
