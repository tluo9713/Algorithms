/*
https://leetcode.com/problems/integer-to-english-words/
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.
 */

/* *
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  let str = num.toString();
  //initialize digits
  let digits = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };
  let twoDigits = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  };
  let powerObj = {
    0: '',
    1: 'Thousand',
    2: 'Million',
    3: 'Billion',
    4: 'Trillion',
  };
  let solution = '';
  let pointer = str.length;
  let power = 0;
  while (pointer > 0) {
    //work on 3 digits at a time
    let currStr = [];
    let currSet = str.substring(pointer - 3, pointer);
    while (currSet.length < 3) currSet = '0' + currSet;
    let hundred = currSet[0];
    let ten = currSet[1];
    let teen = currSet[1] + currSet[2];
    let one = currSet[2];
    if (hundred !== '0') currStr.push(digits[hundred] + ' Hundred');

    if (ten === '1') currStr.push(twoDigits[teen]);
    else if (ten !== '0') currStr.push(twoDigits[ten]);
    if (ten !== '1' && one !== '0') currStr.push(digits[one]);

    if (power !== 0 && currStr.length) currStr.push(powerObj[power]);
    if (solution === '') {
      solution = currStr.join(' ');
    } else if (currStr.length) {
      solution = currStr.join(' ') + ' ' + solution;
    }
    power++;
    pointer -= 3;
  }

  return solution;
};
