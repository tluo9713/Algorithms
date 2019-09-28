//https://leetcode.com/problems/partition-labels/

//A string S of lowercase letters is given. We want to partition this string
//into as many parts as possible so that each letter appears in at most one
//part, and return a list of integers representing the size of these parts.

/*
 * @param {string} S
 * @return {number[]}
 */

//This might appear intimidating at first until you get a good approach. It
//would be difficult to keep track of how many words to split it into, but what
//if you just kept track of each unique letter's first appearance as well as
//last apperance? If you store it in an object with all the information above,
//you essentially have a bunch of intervals. If you want to have the minimum
//amount of partitions, you're indirectly asking to merge intervals if they
//overlap and then check the size of the each interval.

var partitionLabels = function(S) {
  //First, find all the intervals you can for each letter and save them. I use
  //an array to keep track of order of seen letters as well.
  let seen = {};
  let order = [];
  for (let i = 0; i < S.length; i++) {
    let letter = S[i];
    if (!seen[letter]) {
      order.push(letter);
      seen[letter] = [i, i];
    } else {
      seen[letter][1] = i;
    }
  }

  //Now we're creating a new array that will merge intervals together.
  let merged = [seen[order[0]]];
  for (let i = 1; i < order.length; i++) {
    let last = merged[merged.length - 1];
    let currentLetter = order[i];
    let currentInterval = seen[currentLetter];
    if (last[1] > currentInterval[0]) {
      last[1] = Math.max(last[1], currentInterval[1]);
    } else {
      merged.push(currentInterval);
    }
  }
  //Now we just got to return the size of each interval.
  return merged.map(element => element[1] - element[0] + 1);
};
