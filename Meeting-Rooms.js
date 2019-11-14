//https://leetcode.com/problems/meeting-rooms/

//Given an array of meeting time intervals consisting of start and end times
//[[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all
//meetings.

/* *
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    let currEnd = intervals[i][1];
    let nextStart = intervals[i + 1][0];

    if (currEnd > nextStart) return false;
  }
  return true;
};
