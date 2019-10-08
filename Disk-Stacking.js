//https://www.algoexpert.io/questions/Disk%20Stacking

//Disk Stacking

//You are given a non-empty array of arrays. Each subarray holds three integers
//and represents a disk. These integers denote each disk's width, depth, and
//height, respectively. Your goal is to stack up the disk and maximize the total
//height of the stack. A disk must have a strictly smaller width, depth, and
//height than any other disk below it. Write a function that returns an array of
//the disks in the final stack, starting with the top disk and ending with the
//bottom disk. Note that you cannot rotate disks; in other words, the integers
//in each subarray must represent [width, depth, height] at all times. Assuem
//that there will only be one stack with the greatest total height.

//This could get pretty complicated since there are so many possibilities.There
//is a lot of similarities with this problem and longest increasing subsequence.
//If we just sort the array first by heights we'll know that any element on the
//right of a current element can NOT be stacked on top of the current element.
//Then you initialize two arrays, one for maxHeight at current disk and previous
//index for the max height. Once sorted, you have one for loop for the current
//index and you check sequentially from the 0th index to current index and check
//if you can stack the smaller disk on top of current disk. If so and it's
//bigger than the max height so far, update the max height as well as the
//previous index needed to achieve this height. At the end of it all, grab the
//index of the max height and go backwards based on the previous index for the
//max height until it's undefined. Then you'll have your solution.
//The time complexity is O(n^2) because you sort it for O(nlogn) time but there
//is a nested for loop which makes it n^2. The space complexity is O(n) because
//we need two arrays for our approach.

function diskStacking(disks) {
  //sort by height
  //create helper function that check if one disk is stackable on the other
  //create a dynamic programming tabulation for solutions and find the solution.
  disks.sort((a, b) => a[2] - b[2]);
  const maxHeights = disks.map(disk => disk[2]);
  const prevDiskForMaxHeight = new Array(disks.length);
  for (let i = 1; i < disks.length; i++) {
    for (let j = 0; j < i; j++) {
      const disk1 = disks[i];
      const disk2 = disks[j];
      const heightSum = disk1[2] + maxHeights[j];
      if (helper(disk1, disk2) && maxHeights[i] < heightSum) {
        maxHeights[i] = heightSum;
        prevDiskForMaxHeight[i] = j;
      }
    }
  }
  const maxHeight = Math.max(...maxHeights);
  let currentIdx = maxHeights.indexOf(maxHeight);
  const result = [];
  while (currentIdx !== undefined) {
    result.push(disks[currentIdx]);
    currentIdx = prevDiskForMaxHeight[currentIdx];
  }
  result.reverse();
  return result;
}

function helper(d1, d2) {
  return d1.every((dimension, idx) => dimension > d2[idx]);
}
