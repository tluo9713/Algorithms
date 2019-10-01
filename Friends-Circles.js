//https://leetcode.com/problems/friend-circles/

// There are N students in a class. Some of them are friends, while some are
//not. Their friendship is transitive in nature. For example, if A is a direct
//friend of B, and B is a direct friend of C, then A is an indirect friend of
//C. And we defined a friend circle is a group of students who are direct or
//indirect friends.

//Given a N*N matrix M representing the friend relationship between students in
//the class. If M[i][j] = 1, then the ith and jth students are direct friends
//with each other, otherwise not. And you have to output the total number of
//friend circles among all the students.

//Naive solution: We can draw similarities to the Number of Rivers/Island algos.
//First, lets iterate through every element in the array and check for 1's. If
//we encounter such a case, we can just call on our helper function which turns
//every 1 in that row into a 0, and then recursively call on the function for
//the col where there was a 1, because that's a friend. This way we turn all
//1's into 0's and that counts as one friend circle. Continue iterating through
//every element and use the helper function and in the end you'll have all your
//friend circles. This is O(n^2) time complexity because we traverse through
//the matrix. Certainly we'll also call a helper function which will traverse
//through the Matrix for friends, but at the same time we'll only traverse each
//element once. Space complexity is O(1) because we're not using any extra space
//unless you count the recursive call stack in which case worse case would be
//O(n^2)
var findCircleNumNaive = function(M) {
  let circleCount = 0;
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      let student = M[i][j];
      if (student === 1) {
        traverseFriends(M, i);
        circleCount++;
      }
    }
  }
  return circleCount;
};

var traverseFriendsNaive = function(M, row) {
  for (let col = 0; col < M.length; col++) {
    if (row === col) {
      M[row][col] = 0;
    }
    if (M[row][col] === 1) {
      M[row][col] = 0;
      traverseFriendsNaive(M, col);
    }
  }
};
//Optimized Solution: Why not keep an object/set that keeps track of which
//friend we have seen?
var findCircleNumOptimized = function(M) {
  let circleCount = 0;
  let visited = {};
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      traverseFriendsOptimized(M, visited, i);
      circleCount++;
    }
  }
  return circleCount;
};

var traverseFriendsOptimized = function(M, visited, row) {
  if (visited[row]) return;
  visited[row] = true;
  for (let col = 0; col < M.length; col++) {
    if (M[row][col] === 1) traverseFriendsOptimized(M, visited, col);
  }
};
