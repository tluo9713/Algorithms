//https://leetcode.com/problems/custom-sort-string/

//S and T are strings composed of lowercase letters. In S, no letter occurs
//more than once.

//S was sorted in some custom order previously. We want to permute the characters
//of T so that they match the order that S was sorted. More specifically, if x
//occurs before y in S, then x should occur before y in the returned string.

//Return any permutation of T (as a string) that satisfies this property.

/* *
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let letterObj = {};

  for (let i = 0; i < T.length; i++) {
    let letter = T[i];
    if (!letterObj[letter]) letterObj[letter] = 0;
    letterObj[letter]++;
  }
  let sortedStr = '';
  for (let i = 0; i < S.length; i++) {
    let letter = S[i];
    if (letterObj[letter]) {
      let amount = letterObj[letter];
      sortedStr += letter.repeat(amount);
      letterObj[letter] = 0;
    }
  }
  let letters = Object.keys(letterObj);
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    if (letterObj[letter]) {
      let amount = letterObj[letter];
      sortedStr += letter.repeat(amount);
    }
  }
  return sortedStr;
};
