//https://www.algoexpert.io/questions/Powerset

//Write a function that takes in an array of unique integers and returns its
//powerset. The powerset P(X) of a set X is the set of all subsets of X. For
//example, the power set of [1,2] is [[], [1],[2],[1,2]]. Note that the sets
//in the powerset do not need to be in any paticular order.

function powerset(array) {
  // Write your code here.
  let solution = [[]];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    for (let j = solution.length - 1; j >= 0; j--) {
      let current = solution[j];
      solution.push([...current, el]);
    }
  }
  return solution;
}

function powerset2(array) {
  // Write your code here.
  let solution = [[]];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let temp = solution.map(set => [...set, el]);
    solution = solution.concat(temp);
  }
  return solution;
}

function powerset1(array) {
  // Write your code here.
  let solution = [[]];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    solution.forEach(set => {
      if (!set.includes(el)) {
        solution.push([...set, el]);
      }
    });
  }
  return solution;
}
