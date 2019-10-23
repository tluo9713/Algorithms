//https://leetcode.com/problems/decode-string/

//Given an encoded string, return its decoded string.

//The encoding rule is: k[encoded_string], where the encoded_string inside the
//square brackets is being repeated exactly k times. Note that k is guaranteed
//to be a positive integer.

//You may assume that the input string is always valid; No extra white spaces,
//square brackets are well-formed, etc.

//Furthermore, you may assume that the original data does not contain any digits
//and that digits are only for those repeat numbers, k. For example, there won't
//be input like 3a or 2[4].

/* *
 * @param {string} s
 * @return {string}
 */

//Initially this problem seems very hard because you can have a deeply nested
//set of string which complicates how many times you multiply a string.
//The secret to solving this is to use a stack. By using a stack with a bit of
//logic you can keep track of which letters you need to multiply by how much.
//This will take care of nested bracket statements
var decodeString = function(s) {
  const numStack = [];
  const letterStack = [];
  let decoded = '';
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (isNum(char) && !isNum(s[i - 1])) {
      numStack.push(char);
    } else if (isNum(char)) {
      numStack[numStack.length - 1] += char;
    } else if (char === '[') {
      letterStack.push('');
    } else if (char === ']') {
      let word = letterStack.pop();
      let num = numStack.pop();
      word = word.repeat(num);
      if (letterStack.length === 0) {
        decoded += word;
      } else {
        letterStack[letterStack.length - 1] += word;
      }
    } else if (letterStack.length) {
      letterStack[letterStack.length - 1] += char;
    } else {
      decoded += char;
    }
  }
  return decoded;
};

var isNum = function(char) {
  return !isNaN(Number(char));
};
