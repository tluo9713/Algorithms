//https://leetcode.com/problems/two-city-scheduling/

//There are 2N people a company is planning to interview. The cost of flying the
//i-th person to city A is costs[i][0], and the cost of flying the i-th person
//to city B is costs[i][1].

//Return the minimum cost to fly every person to a city such that exactly N
//people arrive in each city.

//Initial approach: It might be the initial approach to grab the smallest value
//from each array, but this won't always lead to a balanced amount of people
//going to both cityA and cityB. Instead, I thought what would be best in terms
//of opportunity costs. If we take the difference between the two travel
//destinations, from the result we can tell which value is larger (based on the
//sign of the diff) and based on that magnitude we can also tell how much of a
//difference there is. If we sort by the absolute value of this distance, we'll
//prioritize sending those with the largest cost diff first, optimizing for
//costs. Other things to note we can only add to a cityA if we didn't already
//send N people there already. Or else we have to send them to cityB. Below is
//what the logic looks like.

var twoCitySchedCostNaive = function(costs) {
  let diffArr = costs.map(el => [el[1] - el[0], el[0], el[1]]); //O(n) time
  diffArr.sort((a, b) => Math.abs(b[0]) - Math.abs(a[0])); //O(nlogn) time
  let min = 0;
  let cityA = costs.length / 2;
  let cityB = cityA;
  for (let i = 0; i < diffArr.length; i++) {
    //O(n) time
    let el = diffArr[i];
    if (el[0] < 0 && cityB !== 0) {
      min += el[2];
      cityB--;
      //going to cityB
    } else if (el[0] < 0 && cityB === 0) {
      min += el[1];
      cityA--;
      //going to cityA
    } else if (el[0] > 0 && cityA !== 0) {
      min += el[1];
      cityA--;
      //going to cityA
    } else {
      min += el[2];
      cityB--;
      //going to cityB
    }
  }
  return min; //Total O(nlogn) time O(n) space
};
//The above solution, while is fast, isn't optimized in terms of space and
//doesn't lend itself to readability due to the logic involved.

//My initial approach was to create a new array with the difference between the
//two travel flight costs, but why create another array if we can just sort by
//this value instead? That way we can sort in place.
//Also, the logic I implemented makes sense, but if you take a step back, you
//can also realize that if you sort them appropriately (with out using Math.abs)
//those in the first half will be going to cityA and those in the second half
//will be going to cityB. To avoid an if statement of checking if we're in the
//first half or the second half, lets just add the ith element with the i+n/2
//element, further simplifying the code.
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let min = 0;
  let len = costs.length / 2;
  for (let i = 0; i < len; i++) {
    //O(n) time
    let el1 = costs[i][0];
    let el2 = costs[i + len][1];
    min += el1 + el2;
  }
  return min; //Total O(nlogn) time O(1) space
};
