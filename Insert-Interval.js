/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// https://leetcode.com/problems/insert-interval/

var insert1 = function(intervals, newInterval) {
  let i = 0;
  let newIntervals = [];
  let inserted = false;
  let min;
  let max;
  while (i < intervals.length) {
    let currentInterval = intervals[i];
    if (
      (currentInterval[0] <= newInterval[0] &&
        currentInterval[1] >= newInterval[0]) ||
      (newInterval[0] <= currentInterval[0] &&
        newInterval[1] >= currentInterval[0])
    ) {
      min = Math.min(currentInterval[0], newInterval[0]);
      max = Math.max(currentInterval[1], newInterval[1]);
      newIntervals.push([min, max]);
      inserted = true;
      i++;
      break;
    } else if (newInterval[0] < currentInterval[0]) {
      newIntervals.push(newInterval, currentInterval);
      inserted = true;
      i++;
      break;
    } else {
      newIntervals.push(currentInterval);
    }
    i++;
  }
  while (i < intervals.length) {
    let currentInterval = intervals[i];
    let previousInterval = newIntervals[newIntervals.length - 1];
    if (previousInterval[1] >= currentInterval[0]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      newIntervals.push(currentInterval);
    }
    i++;
  }
  if (!inserted) newIntervals.push(newInterval);
  return newIntervals;
};

//Alternative solution that is more succinct
var insert = function(intervals, newInterval) {
  const result = [];
  let inserted = false;
  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];
    if (curr[1] < newInterval[0] || inserted) {
      result.push(curr);
    } else if (newInterval[1] < curr[0] && !inserted) {
      result.push(newInterval, curr);
      inserted = true;
    } else if (curr[0] <= newInterval[0] || newInterval[1] <= curr[1]) {
      newInterval[0] = Math.min(curr[0], newInterval[0]);
      newInterval[1] = Math.max(curr[1], newInterval[1]);
    }
  }

  if (!inserted) {
    result.push(newInterval);
  }

  return result;
};
