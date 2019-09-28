//https://leetcode.com/problems/combination-sum/

//Given a set of candidate numbers (candidates) (without duplicates) and a
//target number (target), find all unique combinations in candidates where the
//candidate numbers sums to target.

//The same repeated number may be chosen from candidates unlimited number of
//times.

//When I first read this problem, it seemed similar to problems such as
//number of paths to get from start to finish. The only difference is this
//problem also states we have to return the unique combinations that sum up to
//the target. So it would appear that the solution would use dynamic
//programming! What if we have a memoized array with each index representing
//the current value and the element representing an array with all possible
//unique combinations to sum up to current value at index? We start with an
//empty array at index 0, and use the current candidate to check if some
//combination of previous elements would sum up to current index. You do this
//by looking at the the current index value minus current candidate, and look
//at that index. you then add the current candidate to a copy of those
//combinations and save it at the current index. By doing this you build
//your solution based on previous ones.
//The time complexity is O(cn^2), where c represents the number of candidates,
//and n representing the target value since you'll need to calculate every
//possibility for values for candidates at every memo as well as copying values.
//The space complexity is O(n^2). This is because the size of the memo is
//n, and the number of candidates at every value is n/c, and there are c
//candidates, which makes the solution O(n^2)
//An alternative solution yet to be explored is backtracking.

var combinationSum = function(candidates, target) {
  let memo = [];
  for (let i = 0; i < target + 1; i++) {
    memo.push([]);
  }
  memo[0] = [[]];
  for (let i = 0; i < candidates.length; i++) {
    let val = candidates[i];

    for (let j = val; j <= target; j++) {
      let prev = memo[j - val];
      let temp = prev.map(el => [...el, val]);
      memo[j] = [...memo[j], ...temp];
    }
  }
  return memo[memo.length - 1];
};
