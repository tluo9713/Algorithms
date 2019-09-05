//https://www.algoexpert.io/questions/Subarray%20Sort

//Write a function that takes in an array of integers of length at least 2. The
// function should return an array of the starting and ending indices of the
//smallest subarray in the input array that needs to be sorted in place in order
// for the entire input array to be sorted. If the input array is already sorted
// the function should return [-1,-1]

//The trick here is that you can realize that you need to find the biggest
//number that's out of place and then the smallest number thats our of place,
//and if you have these two indices you can return them. This way you do two
//passes and you can achieve the solution. This will be O(n) time and O(1)
//space.

function subarraySort(array) {
  let biggestSeenSoFar = -Infinity;
  let bigOutOfPlaceIndex = null;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (biggestSeenSoFar <= element) {
      biggestSeenSoFar = element;
    } else {
      bigOutOfPlaceIndex = i;
    }
  }
  if (bigOutOfPlaceIndex === null) return [-1, -1];

  let smallestSeenSoFar = Infinity;
  let smallOutOfPlaceIndex;
  for (let i = array.length - 1; i >= 0; i--) {
    let element = array[i];
    if (smallestSeenSoFar >= element) {
      smallestSeenSoFar = element;
    } else {
      smallOutOfPlaceIndex = i;
    }
  }
  return [smallOutOfPlaceIndex, bigOutOfPlaceIndex];
}
