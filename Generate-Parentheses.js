//leetcode.com/problems/generate-parentheses/

https: //Given n pairs of parentheses, write a function to generate all combinations
//of well-formed parentheses.

/* *
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  let allParens = [];
  helper(n, allParens);
  return allParens;
};

var helper = function(
  max,
  allParens,
  openParens = 0,
  closedParens = 0,
  str = ''
) {
  if (openParens === max && openParens === closedParens) {
    allParens.push(str);
  } else {
    if (openParens < max)
      helper(max, allParens, openParens + 1, closedParens, str + '(');
    if (closedParens < openParens)
      helper(max, allParens, openParens, closedParens + 1, str + ')');
  }
};
