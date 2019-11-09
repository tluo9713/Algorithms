//https://leetcode.com/problems/verifying-an-alien-dictionary/

//In an alien language, surprisingly they also use english lowercase letters,
//but possibly in a different order. The order of the alphabet is some
//permutation of lowercase letters.

//Given a sequence of words written in the alien language, and the order of the
//alphabet, return true if and only if the given words are sorted
//lexicographicaly in this alien language.

/* *
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let orderDict = {};
  for (let i = 0; i < order.length; i++) {
    let letter = order[i];
    orderDict[letter] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    if (!checkSorted(word1, word2, orderDict)) return false;
  }

  return true;
};

var checkSorted = function(word1, word2, orderDict) {
  let idx = 0;

  while (idx < word1.length && idx < word2.length) {
    let letter1 = word1[idx];
    let letter2 = word2[idx];
    let order1 = orderDict[letter1];
    let order2 = orderDict[letter2];
    if (order1 < order2) return true;
    if (order1 > order2) return false;

    idx++;
  }
  if (word1.length === word2.length) return true;
  if (word1.length < word2.length) return true;
  return false;
};
