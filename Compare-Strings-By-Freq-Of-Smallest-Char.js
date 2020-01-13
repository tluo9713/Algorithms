//https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

// Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

// Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

/* *
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  let wordsArrFreq = new Array(11).fill(0);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let freq = getFreqSmallestChar(word);
    wordsArrFreq[freq]++;
  }
  let sum = 0;
  for (let i = wordsArrFreq.length - 1; i >= 0; i--) {
    sum += wordsArrFreq[i];
    wordsArrFreq[i] = sum;
  }
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let freq = getFreqSmallestChar(query);
    if (freq >= 10) res.push(0);
    else res.push(wordsArrFreq[freq + 1]);
  }
  return res;
};

var getFreqSmallestChar = function(word) {
  let freqObj = {};
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!freqObj[char]) freqObj[char] = 0;
    freqObj[char]++;
  }
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(97 + i);
    if (freqObj[char]) return freqObj[char];
  }
};
