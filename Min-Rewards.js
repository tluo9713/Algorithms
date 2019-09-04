//https://www.algoexpert.io/questions/Min%20Rewards

//Imagine that you're a teacher who's just graded the final exam in a class.
//You have a list of student scores on the final exam in a particular order
//(not necessarily sorted), and you want to reward your students. You decide
//to do so fairly by giving them arbitrary rewards following two rules: first,
//all students must receive at least one reward; second, any given student must
//receive strictly more rewards than an adjacent student (a student immediately
//to the left or to the right) with a lower score and must receive strictly
//fewer rewards than an adjacent student with a higher score. Assume that all
//student have different scores; in other words, the scores are all unique.
//Write a function that takes in a list of scores and returns the minimum
//number of rewards that you must give out to students, all the while
//satisfying the two rules.

//So the naive solution would be to create an array of all 1's thats the length
//of the original array, this way we guarentee that there is at least one reward
//for every student. Then you can have a while loop that checks every adjacent
//score and if the current score is higher, to increase the max adjacent by one
//as the current rewards. You keep track if any changes has been made. If so,
//check again if you need to increase any rewards. If there are no changes, then
//you are complete and you check the total amount of rewards in the array. This
//works and is O(n) space complexity, however, the time complexity could be
//O(n^2) if the array is always descending.
//The optimized solution is to have the same initialized array and then run a
//loop to check if the previous score (current index minus 1) is less than
//current score, in which case, you increment the current score. By doing this
//you ensure that any increasing adjacent scores will all have appropriate
//rewards relative to the left scores. Then you iterate from the 2nd to last
//element in the array decreasing and check if the score to the right is less
//than current and update the rewards accordingly. This way you only need
//2 passes and you'll have the total amount of rewards you need.

function minRewards(scores) {
  let rewardsArr = new Array(scores.length).fill(1);

  for (let i = 0; i < scores.length; i++) {
    let prev = scores[i - 1];
    let curr = scores[i];

    if (curr > prev) {
      rewardsArr[i] = Math.max(rewardsArr[i - 1] + 1, rewardsArr[i]);
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    let prev = scores[i + 1];
    let curr = scores[i];

    if (curr > prev) {
      rewardsArr[i] = Math.max(rewardsArr[i + 1] + 1, rewardsArr[i]);
    }
  }
  return rewardsArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function minRewardsNaive(scores) {
  // Write your code here.
  let rewardsArr = new Array(scores.length).fill(1);
  let changes = true;
  let neighbors;
  while (changes) {
    changes = false;

    scores.forEach((score, idx) => {
      neighbors = [];
      if (
        scores[idx - 1] !== undefined &&
        scores[idx - 1] < score &&
        rewardsArr[idx - 1] >= rewardsArr[idx]
      ) {
        neighbors.push(rewardsArr[idx - 1] + 1);
      }
      if (
        scores[idx + 1] !== undefined &&
        scores[idx + 1] < score &&
        rewardsArr[idx + 1] >= rewardsArr[idx]
      ) {
        neighbors.push(rewardsArr[idx + 1] + 1);
      }
      if (neighbors.length) {
        rewardsArr[idx] = Math.max(...neighbors);
        changes = true;
      }
    });
  }
  let totalRewards = rewardsArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return totalRewards;
}

// Do not edit the line below.
exports.minRewards = minRewards;
