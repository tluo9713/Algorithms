class PriorityQueue {
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  DijkstraInitialize(start, distances, prev, pQ) {
    for (let vertex in this.adjacencyList) {
      if (this.adjacencyList.hasOwnProperty(vertex)) {
        if (vertex === start) {
          distances[vertex] = 0;
          pQ.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          pQ.enqueue(vertex, Infinity);
        }
        prev[vertex] = null;
      }
    }
  }
  DijkstraSearch(smallest, distances, prev, pQ) {
    for (let neighbor in this.adjacencyList[smallest]) {
      if (this.adjacencyList[smallest].hasOwnProperty(neighbor)) {
        console.log('alist', this.adjacencyList[smallest]);
        let nextNode = this.adjacencyList[smallest][neighbor];
        console.log('neighbor', nextNode.node);

        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        if (candidate < distances[nextNeighbor]) {
          distances[nextNeighbor] = candidate;
          prev[nextNeighbor] = smallest;
          pQ.enqueue(nextNeighbor, candidate);
        }
        console.log('pq', pQ.values);
        console.log('distance', distances);
      }
    }
  }
  DijkstraAlgo(start, end) {
    let distances = {};
    let prev = {};
    let pQ = new PriorityQueue();
    let smallest;
    let path = [];
    this.DijkstraInitialize(start, distances, prev, pQ);
    while (pQ.values.length) {
      smallest = pQ.dequeue().val;
      if (smallest === end) {
        while (prev[smallest]) {
          path.push(smallest);
          smallest = prev[smallest];
        }
        break;
      }
      // if (smallest || distances[smallest] !== Infinity) {
      this.DijkstraSearch(smallest, distances, prev, pQ);
      // }
    }
    let newPath = path.concat(smallest).reverse();
    console.log(newPath);
    return newPath;
  }
}

let g = new WeightedGraph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');

g.addEdge('a', 'b', 4);
g.addEdge('a', 'c', 2);
g.addEdge('b', 'e', 3);
g.addEdge('c', 'd', 2);
g.addEdge('c', 'f', 4);
g.addEdge('d', 'e', 3);
g.addEdge('d', 'f', 1);
g.addEdge('e', 'f', 1);

g.DijkstraAlgo('a', 'e');
