//Implement mergeSort
//Merge sort works by splitting the array in half recursively until the arrays
//are sorted (if the array is length 1, it's sorted). Then it begins merging
//all the merged arrays and because all arrays are merged, we only have to
//compare the first element of both sorted arrays. This makes sorting the sorted
//arrays O(logn) time, but since you need to run it n times the time complexity
//is O(nlogn) and space complexity is O(n). This is because we have to create
//a new array for every time we break an array in half and it becomes size n
//in total
function mergeSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (!comparator) comparator = (a, b) => a - b;
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid), comparator);
  let arr2 = mergeSort(arr.slice(mid), comparator);
  let mergedArr = merge(arr1, arr2, comparator);
  return mergedArr;
}

//Merge two sorted arrays given a comparator. This is a pure function and does
//not mutate original arrays. Run in O(n+m) time and O(n+m) space, where m and
//n are the size of the two arrays. Though assuming the split is done correctly
//m and n are the same.
function merge(arr1, arr2, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (!comparator) comparator = (a, b) => a - b;
  let mergedArr = [];
  let i = 0;
  let j = 0;
  let el1;
  let el2;
  while (i < arr1.length && j < arr2.length) {
    el1 = arr1[i];
    el2 = arr2[j];
    if (comparator(el1, el2) > 0) {
      mergedArr.push(el2);
      j++;
    } else {
      mergedArr.push(el1);
      i++;
    }
  }
  while (i < arr1.length) {
    el1 = arr1[i];
    mergedArr.push(el1);
    i++;
  }
  while (j < arr2.length) {
    el2 = arr2[j];
    mergedArr.push(el2);
    j++;
  }
  return mergedArr;
}
