//Bubble Sort
//Implement a function called bubbleSort. Given an array, bubbleSort will sort
// the values in the array. The function takes 2 parameters: an array and an
//optional comparator function.

//Fairly straight forward, bubble sort is O(n^2) time complexity and O(1) space
//comlexity.

function bubbleSort(arr, comparator) {
  if (comparator === undefined) {
    comparator = (a, b) => a - b;
  }
  let didWeSwap = true;
  for (let i = arr.length; i > 0; i--) {
    if (!didWeSwap) break;
    didWeSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
        didWeSwap = true;
      }
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

let testArr = [4, 20, 12, 10, 7, 9];
console.log(bubbleSort(testArr));
