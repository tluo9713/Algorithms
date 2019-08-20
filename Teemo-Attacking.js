/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

//https://leetcode.com/problems/teemo-attacking/

var findPoisonedDuration = function(timeSeries, duration) {
  let totalDuration = 0;
  let timeUntilPoisonEnds;
  timeSeries.forEach(time => {
    totalDuration += duration;
    if (timeUntilPoisonEnds && timeUntilPoisonEnds > time) {
      let overlap = timeUntilPoisonEnds - time;
      totalDuration -= overlap;
    }
    timeUntilPoisonEnds = duration + time;
  });
  return totalDuration;
};
