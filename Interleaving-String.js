/*
https://leetcode.com/problems/interleaving-string/
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
*/

/*
This is incredibly slow due with the brute force recursion solution. This is because you end up calculating a lot of previous calculations and this make its incredibly slow. If you just create a memo to record whether you calculated this specific string before, this make everything much faster.
*/

var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let seen = {};
  return helper(s1, s2, s3, seen);
};

var helper = function(s1, s2, s3, seen) {
  let base = s1 + ',' + s2 + ',' + s3;
  if (seen[base] === true) return true;
  if (seen[base] === false) return false;

  if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
    return true;
  }

  if (s1[0] === s3[0]) {
    if (helper(s1.substring(1), s2, s3.substring(1), seen)) {
      seen[base] = true;
      return true;
    }
  }
  if (s2[0] === s3[0]) {
    if (helper(s1, s2.substring(1), s3.substring(1), seen)) {
      seen[base] = true;
      return true;
    }
  }
  seen[base] = false;
  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  return helper(s1, s2, s3);
};

var helper = function(s1, s2, s3) {
  if (s1.length === 0 && s2.length === 0 && s3.length === 0) return true;

  if (s1[0] === s3[0]) {
    if (helper(s1.substring(1), s2, s3.substring(1))) return true;
  }
  if (s2[0] === s3[0]) {
    if (helper(s1, s2.substring(1), s3.substring(1))) return true;
  }
  return false;
};

/* I'm thinking of checking if the first letter at s1 matches s3, we'll check if its possible to create a string by recursively calling the helper function without the first letter of s1 and s3.
base case is if s1.length === 0, s2.length and s3. as well

*/
