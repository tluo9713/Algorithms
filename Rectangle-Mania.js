//https://www.algoexpert.io/questions/Rectangle%20Mania

//You can store all possible coordinates for quick look up if they exist, then
//you can search for eligible corners. Eligible corners are 2 coordinates that
//can be a coordinate for a rectangle. Some conditions include : they can't
// have the same x or y values, and the first corner must be going to the top
//right to the next corner.
//By doing this, can just check if the other corners of the rectangle exist and
//since the object that contain all coordinates is constant look up time, the
//solution is O(n^2) time complexity and O(n) space complexity.
function rectangleMania(coords) {
  //Store all possible coordinates in an object, where the first
  //level object is the x coordinate, and the 2nd level is for
  //the second object
  let xCoord = {};
  for (let i = 0; i < coords.length; i++) {
    let coordinate = coords[i];
    let x = coordinate[0];
    let y = coordinate[1];

    if (!xCoord[x]) xCoord[x] = {};
    xCoord[x][y] = true;
  }
  let count = 0;
  //Look for corners possible corners
  for (let i = 0; i < coords.length; i++) {
    let firstCorner = coords[i];
    for (let j = i + 1; j < coords.length; j++) {
      let secondCorner = coords[j];
      //If they are are on the same coordinate, they are not opposite corners
      if (
        firstCorner[0] === secondCorner[0] ||
        firstCorner[1] === secondCorner[1]
      )
        continue;
      //I want to ignore any diagonals that are going from top left to bottom
      //right.
      if (
        firstCorner[0] <= secondCorner[0] &&
        firstCorner[1] >= secondCorner[1]
      )
        continue;
      //I want to ignore any diagonals that are going from bottom right to top
      //left, which is the same as before but going the other direction.
      if (
        firstCorner[0] >= secondCorner[0] &&
        firstCorner[1] <= secondCorner[1]
      )
        continue;

      if (
        xCoord[firstCorner[0]][secondCorner[1]] &&
        xCoord[secondCorner[0]][firstCorner[1]]
      )
        count++;
    }
  }
  return count;
}
