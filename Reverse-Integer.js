/*
https://leetcode.com/problems/reverse-integer/
Given a 32-bit signed integer, reverse digits of an integer.
*/

/* *
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  let arr = x.toString().split('');
  let negative = false;
  if (arr[0] === '-') {
    negative = true;
    arr.shift();
  }
  while (arr[arr.length - 1] === '0') arr.pop();
  arr.reverse();
  let num = Number(arr.join(''));
  if (negative) num *= -1;
  if (num > 2 ** 31 - 1) return 0;
  if (num < -(2 ** 31)) return 0;

  return num;
};
//convert num to a string to an array
//if first el is '-' , shift and trigger a flag
//while last el is '0' pop
//reverse
//combine and convert to int
//make negative if flag is triggered
//return num

var reverse1st = function(x) {
  let numArr = x.toString().split('');
  let leftPointer = 0;
  if (numArr[0] === '-') {
    leftPointer = 1;
  }
  let rightPointer = numArr.length - 1;
  while (leftPointer < rightPointer) {
    const temp = numArr[leftPointer];
    numArr[leftPointer] = numArr[rightPointer];
    numArr[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
  const reversed = Number(numArr.join(''));
  const result = Math.abs(reversed) > 2 ** 31 - 1 ? 0 : reversed;
  return result;
};
