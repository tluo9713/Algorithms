/**
 * @param {string} s
 * @return {number}
 */

//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Without optimizing, this is easily a O(n^2) time complexity which is costly.
//However, if we just have two pointers instead, we can move find the longest
//unique substring quickly. First you have an object that holds keys with values
//representing the index where that letter was last seen at. Then you move the
//right pointer until you encounter a letter you seen before. You subtract the
//two pointers and you get the length. Then you set the left to be either the
//current value or the last time you seen a letter plus 1, whichever is larger.
//This will be done in one pass and has a O(n) time complexity as well as a O(n)
//space complexity.
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let longest = 0;
  let hash = {};

  while (right < s.length) {
    let letter = s[right];

    if (hash[letter] === undefined) {
      hash[letter] = right;
    } else {
      longest = Math.max(longest, right - left);
      left = Math.max(hash[letter] + 1, left);
      hash[letter] = right;
    }

    right++;
  }
  longest = Math.max(longest, right - left);
  return longest;
};
