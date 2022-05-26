// time complexity O(n ^ 2)

function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let minValueIndex = i;
    for (let j = i; j < n; j++) {
      if (array[j] < array[minValueIndex]) {
        minValueIndex = j;
      }
    }
    [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
  }

  return array;
}
