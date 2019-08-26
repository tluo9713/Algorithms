//Find Rotated Index
//Write a function called findRotatedIndexs which accepts a roatated array of
//sorted numbers and an integer. The function should return the index of the
//integer in the array. If the value is not found, return -1.

function findRotatedIndex(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mid;
  let midIdx;
  while (left <= right) {
    midIdx = Math.floor((left + right) / 2);
    mid = arr[midIdx];
    if (mid === target) {
      return midIdx;
    } else if (mid < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
