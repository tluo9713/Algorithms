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

//Time complexity O(n^2) and because of the matrix we make, O(n^2) space
//complexity.
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

//Alternatively, you can combine both steps in the same for loop and use only
//the memoized array. O(n^2) time complexity, O(n) space complexity
var wordBreak = function(s, wordDict) {
  //create a set with all words in wordDict
  let wordSet = new Set(wordDict);

  //create a sxs matrix represeting if we can create a word from col
  //index to row index.
  let memo = new Array(s.length).fill(false);

  for (let i = 0; i < memo.length; i++) {
    let currWord = '';
    for (let j = i; j < memo.length; j++) {
      let letter = s[j];
      currWord += letter;
      if (wordSet.has(currWord) && (i === 0 || memo[i - 1])) memo[j] = true;
    }
  }

  return memo[memo.length - 1];
};

//For a leetcode efficient answer, don't build your string by adding the letters
//one by one, just use the built in substring method
var wordBreakOptimized = function(s, wordDict) {
  //create a set with all words in wordDict
  let wordSet = new Set(wordDict);

  //create a sxs matrix represeting if we can create a word from col
  //index to row index.
  let memo = new Array(s.length).fill(false);

  for (let i = 0; i < memo.length; i++) {
    for (let j = i; j < memo.length; j++) {
      let currWord = s.substring(i, j + 1);
      if (wordSet.has(currWord) && (i === 0 || memo[i - 1])) memo[j] = true;
    }
  }

  return memo[memo.length - 1];
};
