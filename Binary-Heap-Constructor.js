//Max (or min) Binary Heaps have the property of parents having at max 2
//child elements. A unique property is that it the parent elements will always
//be larger than child elements. We can store this as a tree which visually makes
// a lot of sense. We can use a tree, however we can also use a built in data
//structure to simplify. That data structure is an array.
//The tricky part is how do we know which elements are in parents to which nodes?
//Using some math, we can store elements by appending them to the end of an array
//if Parent elements have a index of n, then children nodes will always be at
// 2n+1 or 2n+2. Alternatively, children nodes will have parent nodes at
//Math.floor(n/2).
//Now we can insert and remove at O(logn) time.

class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor(index - 1 / 2);
    let heapArr = this.heap;
    let parentEl = heapArr[parentIdx];
    let indexEl = heapArr[index];

    while (parentEl < indexEl) {
      //Reassign parent and child element
      heapArr[parentIdx] = indexEl;
      heapArr[index] = parentEl;
      //Reassign indices
      index = parentIdx;
      parentIdx = Math.floor(index / 2);
      parentEl = heapArr[parentIdx];
      indexEl = heapArr[index];
    }
  }
  extractMax() {
    let heapArr = this.heap;
    let temp = heapArr[0];
    heapArr[0] = heapArr[heapArr.length - 1];
    heapArr[heapArr.length - 1] = temp;
    let max = heapArr.pop();
    this.bubbleDown();
    return max;
  }
  bubbleDown() {
    let index = 0;
    let heapArr = this.heap;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let parentEl = heapArr[index];
    let leftEl = heapArr[left];
    let rightEl = heapArr[right];
    let maxIdx = leftEl < rightEl ? right : left;
    let maxEl = leftEl < rightEl ? rightEl : leftEl;
    while (maxEl > parentEl) {
      let temp = parentEl;
      heapArr[index] = maxEl;
      heapArr[maxIdx] = temp;
      index = maxIdx;
      left = index * 2 + 1;
      right = index * 2 + 2;
      parentEl = heapArr[index];
      leftEl = heapArr[left];
      rightEl = heapArr[right];
      maxIdx = leftEl < rightEl ? right : left;
      maxEl = leftEl < rightEl ? rightEl : leftEl;
    }
  }
}
