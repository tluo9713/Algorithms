//https://leetcode.com/problems/word-pattern/

//Given a pattern and a string str, find if str follows the same pattern.

//Here follow means a full match, such that there is a bijection between a
//letter in pattern and a non-empty word in str.

/* *
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function(pattern, str) {
  let pToStr = {};
  let strToP = {};
  let pArr = pattern.split('');
  let strArr = str.split(' ');
  if (pArr.length !== strArr.length) return false;
  for (let i = 0; i < pArr.length; i++) {
    let p = pArr[i];
    let s = strArr[i];
    if (!pToStr[p] && !strToP[s]) {
      pToStr[p] = s;
      strToP[s] = p;
    } else if (pToStr[p] === s && strToP[s] === p) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
