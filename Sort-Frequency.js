/*
https://leetcode.com/problems/sort-characters-by-frequency/
Given a string, sort it in decreasing order based on the frequency of characters.
*/

/* *
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let freqObj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!freqObj[char]) freqObj[char] = 0;
    freqObj[char]++;
  }
  let arr = [];
  for (let char in freqObj) {
    arr.push([char, freqObj[char]]);
  }
  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] < b[0];
  });
  let str = '';
  while (arr.length) {
    let curr = arr.pop();
    let [char, freq] = curr;
    str += char.repeat(freq);
  }
  return str;
};
/*

first, lets make a frequency obj that counts frequency of letters in string.
then we'll create an array.
we'll iterate through the keys in our obj and insert in the array with letter as first element and freq as the second.
now we'll sort the array by freq and if its same freq we'll sort by letter occurance.
then we'll just create our string based on the sorted arr of freq/letters
and return it
*/
