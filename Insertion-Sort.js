//Another sort that is also O(n^2) time complexity

function insertionSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (!comparator) comparator = (a, b) => a - b;
  //console.log(comparator)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (comparator(arr[j - 1], arr[j]) > 0) {
        swap(arr, j - 1, j);
      } else {
        break;
      }
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
