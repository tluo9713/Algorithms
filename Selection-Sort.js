//Selection Sort
//Similar deal with Bubble sort, takes an optional parameter for comparator.
//Searches for the smallest number/index and then swap it with the correct index
//O(n^2) time complexity and O(1) space.

function selectionSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (!comparator) comparator = (a, b) => a - b;
  let minIdx;
  for (let i = 0; i < arr.length - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[minIdx], arr[j]) > 0) minIdx = j;
    }
    swap(arr, i, minIdx);
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
