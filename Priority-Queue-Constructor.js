//Naive implementation of the priority queue. Naive because the solution is
//slow, inserting and sorting at O(nlogn) time instead of O(logn)

export default class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor(index / 2);
    let heapArr = this.heap;
    let parentEl = heapArr[parentIdx].val;
    let indexEl = heapArr[index].val;

    while (parentEl < indexEl) {
      //Reassign parent and child element
      heapArr[parentIdx] = indexEl;
      heapArr[index] = parentEl;
      //Reassign indices
      index = parentIdx;
      parentIdx = Math.floor(index / 2);
      parentEl = heapArr[parentIdx].val;
      indexEl = heapArr[index].val;
    }
  }
  dequeue() {
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
