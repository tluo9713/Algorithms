//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

//Given a string S of lowercase letters, a duplicate removal consists of
//choosing two adjacent and equal letters, and removing them.

//We repeatedly make duplicate removals on S until we no longer can.

//Return the final string after all such duplicate removals have been made.  It
//is guaranteed the answer is unique.

/* *
 * @param {string} S
 * @return {string}
 */

//The naive approach is to check if the next letter is the same, and if so, skip
//the next letter. If not, then add that letter to a new string. Then you check
//if there is any change. If so, you have to recursively call the function again
//and repeat the process until you're finished with the problem. Time complexity
//of O(n^2) because you have to iterate through the string every time and there
//is a possiblity you'll run the function n/2 times in worse case scenario.
//Space complexity is the same at O(n^2) due to n/2 recursive calls with strings
//length n
var removeDuplicatesNaive = function(S) {
  let newStr = '';

  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) i++;
    else newStr += S[i];
  }

  if (newStr !== S) newStr = removeDuplicatesNaive(newStr);
  return newStr;
};
//The optimized solution would be to create a stack. If the most recent letter
//in the stack isn't the same as the current letter we add it. Else we'll skip
//the letter and pop.
var removeDuplicates = function(S) {
  let stack = [];

  for (let char of S) {
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }
  return stack.join('');
};
