/*
https://leetcode.com/problems/string-compression

Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.


Follow up:
Could you solve it using only O(1) extra space?
*/

/* *
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length === 1) return;
  let read = 0;
  let write = 1;
  let counter = 1;
  while (write < chars.length) {
    let readChar = chars[read];
    let writeChar = chars[write];
    let num = '' + counter;
    let arr = num.split('');
    if (writeChar === readChar && write === chars.length - 1) {
      counter++;
      write++;
      while (arr.length) {
        read++;
        let digit = arr.shift();
        chars[read] = digit;
      }
    } else if (writeChar === readChar) {
      counter++;
      write++;
    } else if (counter === 1) {
      read++;
      write++;
      chars[read] = writeChar;
    } else {
      while (arr.length) {
        read++;
        let digit = arr.shift();
        chars[read] = digit;
      }
      read++;
      write++;
      chars[read] = writeChar;
      counter = 1;
    }
  }
  while (chars.length !== read + 1) chars.pop();
};
