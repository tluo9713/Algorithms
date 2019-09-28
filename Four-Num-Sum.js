//Solution sorted and used pointers O(n^3) time, space?
function fourNumberSumNaive(array, targetSum) {
  array.sort((a, b) => a - b);
  let solutionArray = [];
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      let left = j + 1;
      let right = array.length - 1;

      while (left < right) {
        let sum = array[i] + array[j] + array[left] + array[right];

        if (sum === targetSum) {
          solutionArray.push([array[i], array[j], array[left], array[right]]);
          left++;
          right--;
        } else if (sum < targetSum) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return solutionArray;
}
