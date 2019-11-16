/*
https://leetcode.com/problems/top-k-frequent-words/
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  //first we'll make a freqObj to keep track of freq of words
  let freqObj = {};
  words.forEach(word => {
    if (!freqObj[word]) freqObj[word] = 0;
    freqObj[word]++;
  });
  let freqArr = [];
  //then we'll create and array of array size 2. these will be the words and the freq
  for (let word in freqObj) {
    let freq = freqObj[word];
    freqArr.push([word, freq]);
  }
  //sort them by freq and if equal by letters
  freqArr.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0] > b[0] ? 1 : -1;
  });
  //grab the first k elements
  let solution = [];
  for (let i = 0; i < k; i++) {
    solution.push(freqArr[i][0]);
  }

  return solution;
};
