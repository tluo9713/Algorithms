//https://www.algoexpert.io/questions/Min%20Number%20Of%20Jumps
//You are given a non-empty array of integers. Each element represents the
// maximum number of steps you can take forward. For example, if the element at
// index 1 is 3, you can go from index 1 to index 2,3, or 4. Write a function
//that returns the minimum number of jumps needed to reach the final index.
//Note that jumping froom index i to index + x always constitutes 1 jump, no
//matter how large x is.

//This problem could be pretty messy to solve if you try to concieve of every
//possible jump combinations and finding the minimum one. To keep things simple,
//we just want to keep relevant information as we iterate through.

//Approach: You keep track of the max you can currently jump with another
//variable that keeps track of how many jumps are left from a previous 'jump'.
//If that number ever hits 0, it means we can't jump any further without using
//a jump that we had access too. In this case, we'll increment the jump counter
//and calculate the amount of jumps left by taking the current max and subtract
//the current position. This is how you calculate the jumps left. This will
//allow you to solve this in one pass, in constant space. O(n) time and O(1)
//space.

function minNumberOfJumps(array) {
  let counter = 0;
  let position = 0;
  let furthestDistance = 0;
  let jumpsLeft = 0;
  while (position < array.length - 1) {
    furthestDistance = Math.max(furthestDistance, position + array[position]);
    if (jumpsLeft === 0) {
      jumpsLeft = furthestDistance - position;
      counter++;
    }
    jumpsLeft--;
    position++;
  }
  return counter;
}
