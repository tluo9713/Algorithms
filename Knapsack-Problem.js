//https://www.algoexpert.io/questions/Knapsack%20Problem

//You are given an array of arrays. Each subarray in this array holds two
//integer values and represents an item; the first integer is the item's value,
//and the second integer is the item's weight. You are also given an integer
//representing the maximum capacity of a knapsack thaty ou have. Your goal is
//to fit items in your knapsack, all the while maximizing their combined value.
//Note that the sum of the weights of the items that you pick cannont exceed
//the knapsack's capacity. Write a function that returns the maximized combined
//value of the items you should pick, as well as an array of the indices of
//each item picked. Assume that there will be only one combination of items
//that maximizes the total value in the knapsack.

//I am actually not sure if there is a brute force solution. However, I took noticed that this seems like a dynamic programing kind of problem. In which case we can leverage that we are solving for subproblems and building our solution based on the previous solutions. First you initialize the array from 0 to the index of the weight your max capacity is. This array will be filled with values [0,[]]. The index represents the weight, and the values represent the maximum value at that weight and the array represents the indices of the items you will take to achieve this value. Then you start from the end of the array and work back to the start. You take the best solution that is at the weight that is the current weight away from the current index. If adding the current value to that value is greater than the value at the current index, you can replace that value and push the indices to that index. By going backwards you don't accidentally double count your current object, since you can only take it or leave it. The time complexity is is O(nc) where n is the number of items in the array and c is the maximum weight as the input. The space complexity is also O(nc) because you have to make an array of length c, and you may include every item from the items array which is n size, making it O(nc).

function knapsackProblem(items, capacity) {
  let memo = new Array(capacity + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = [0, []];
  }
  for (let j = 0; j < items.length; j++) {
    let currentItem = items[j];
    let currentValue = currentItem[0];
    let currentWeight = currentItem[1];

    for (let i = memo.length - 1; i >= currentWeight; i--) {
      let prevBest = memo[i - currentWeight];
      if (memo[i][0] < prevBest[0] + currentValue) {
        memo[i][0] = prevBest[0] + currentValue;
        memo[i][1] = [...prevBest[1], j];
      }
    }
  }
  return memo[memo.length - 1];
}
