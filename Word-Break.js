//https://leetcode.com/problems/word-break/

//Given a non-empty string s and a dictionary wordDict containing a list of
//non-empty words, determine if s can be segmented into a space-separated
//sequence of one or more dictionary words.

//Note: The same word in the dictionary may be reused multiple times in the
//segmentation. You may assume the dictionary does not contain duplicate words.

/* *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreakFirst = function(s, wordDict) {
  //create a set with all words in wordDict
  let wordSet = new Set(wordDict);

  //create a sxs matrix represeting if we can create a word from col
  //index to row index.
  let matrix = new Array(s.length);

  for (let i = 0; i < matrix.length; i++) {
    let row = new Array(s.length).fill(false);
    let currWord = '';
    for (let j = i; j < matrix.length; j++) {
      let letter = s[j];
      currWord += letter;
      if (wordSet.has(currWord)) row[j] = true;
    }
    matrix[i] = row;
  }

  //creating array memo here
  let memo = [...matrix[0]];
  for (let i = 1; i < memo.length; i++) {
    for (let j = i; j < memo.length; j++) {
      if (matrix[i][j] && memo[i - 1]) memo[j] = true;
    }
  }
  return memo[memo.length - 1];
};
