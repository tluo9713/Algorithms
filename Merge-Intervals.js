/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//https://leetcode.com/problems/merge-intervals/
//We are merging intervals. The logic for merging intervals isn't difficult,
//however, the real challenge is that the intervals aren't sorted. Trying to
//tackle the problem is difficult, but once you realize you can just sort
//the intervals, and leverage the advantage of the sorted property.
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  if (intervals.length < 1) return [];
  let i = 1;
  let merged = [intervals[0]];
  while (i < intervals.length) {
    let current = intervals[i];
    let previous = merged[merged.length - 1];

    if (previous[1] >= current[0]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      merged.push(current);
    }
    i++;
  }
  return merged;
};
