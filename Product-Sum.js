//https://www.algoexpert.io/questions/Product%20Sum

function productSum(array, level = 0) {
  // Write your code here.
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      answer += productSum(array[i], level + 1);
    } else {
      answer += array[i];
    }
  }

  return answer * (level + 1);
}

// Do not edit the line below.
exports.productSum = productSum;
