//https://www.algoexpert.io/questions/Permutations

//Write a function that takes in an array of unique integers and returns an
//array of all permutations of those integers. If the input array is empty, your
//function should return an empty array.

function getPermutations(array) {
  if (array.length === 0) return [];
  let solution = [[]];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let temp = [];

    for (let j = 0; j < solution.length; j++) {
      let currentPermutation = solution[j];

      for (let k = 0; k <= currentPermutation.length; k++) {
        let deepCopy = [...currentPermutation];
        temp.push([
          ...currentPermutation.slice(0, k),
          el,
          ...currentPermutation.slice(k),
        ]);
      }
    }
    solution = temp;
  }
  return solution;
}
