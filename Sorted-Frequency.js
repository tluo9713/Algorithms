//Sorted Frequency
//Given a sorted array and a number, write a function called sortedFrequency
//that countes the occurances of the number in the array.

//The naive solution would be to search through array one by one, however, this
//would be O(n) time complexity with O(1) space complexity. However, we can
//leverage the fact that this array is sorted.

//Since this is sorted, we can implement binary search to look for an instance
//of the number. If we can't find it, we can return -1.
//However, once we find it, we just implement binary search with that index
//being the right pointer. This way we can find the lower bound. Then implement
//binary search with the found index as the left pointer and this will find the
//upper bound. Then you subtract the lower bound from the upper bound, add 1
//to account for the off by one error and we have our solution. This may seem
//verbose, but if the array is huge and the number of occurences is huge, this
//will be much faster at O(logn) time complexity and O(1) space complexity.

function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let midIdx;
  let mid;
  let foundIdx;
  let lowerBound;
  let upperBound;
  while (left <= right) {
    midIdx = Math.floor((left + right) / 2);
    mid = arr[midIdx];
    if (mid === num) {
      foundIdx = midIdx;
      break;
    } else if (mid < num) {
      left = midIdx + 1;
    } else {
      right = midIdx - 1;
    }
  }
  if (arr[foundIdx] !== num) return -1;
  left = 0;
  right = foundIdx;
  while (left <= right) {
    midIdx = Math.floor((left + right) / 2);
    mid = arr[midIdx];
    if (mid === num) {
      lowerBound = midIdx;
      right = midIdx - 1;
    } else {
      left = midIdx + 1;
    }
  }
  left = foundIdx;
  right = arr.length - 1;
  while (left <= right) {
    midIdx = Math.floor((left + right) / 2);
    mid = arr[midIdx];
    if (mid === num) {
      upperBound = midIdx;
      left = midIdx + 1;
    } else {
      right = midIdx - 1;
    }
  }
  return upperBound - lowerBound + 1;
}
