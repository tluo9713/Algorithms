//https://leetcode.com/problems/meeting-rooms-ii/

//Given an array of meeting time intervals consisting of start and end times
//[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference
//rooms required.

var minMeetingRooms = function(intervals) {
  let start = [];
  let end = [];

  intervals.forEach(interval => {
    start.push(interval[0]);
    end.push(interval[1]);
  });
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let startP = 0;
  let endP = 0;
  let maxRooms = 0;
  let currRooms = 0;
  while (endP < end.length && startP < start.length) {
    let startTime = start[startP];
    let endTime = end[endP];
    if (startTime < endTime) {
      currRooms++;
      maxRooms = Math.max(maxRooms, currRooms);
      startP++;
    } else {
      currRooms--;
      endP++;
    }
  }
  return maxRooms;
};
