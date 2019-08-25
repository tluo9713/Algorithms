//Given an array of 1s and 0s which ahs all 1s first followed by all 0s, write
//a function called countZeroes, which returns the number of zeroes in the array.

//Of course the naive solution would be to just iterate through every element
//in the array and when you get to the first 0, you take the index and subtract
//that from the array length. This would be O(n) time complexity and O(1) space.

//However, this can be faster, if we just use binary search to look for the
//smallest index of a 0 in the array. You just keep moving the left and right
//pointer until left is greater than right, while keeping track of the smallest
//zero you can find. Then you can just subtract that idx from the length of the
//arr and you have your solution in O(logn) time complexity while maintaining
//the O(1) space complexity.

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!!!
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;
  let zeroIdx = arr.length;
  let midIdx;
  let mid;
  while (left > right) {
    midIdx = Math.floor((left + right) / 2);
    mid = arr[midIdx];
    if (mid === 0) {
      zeroIdx = midIdx;
      right = midIdx - 1;
    } else {
      left = midIdx + 1;
    }
  }
  return arr.length - zeroIdx;
}
