class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    let vertex1Edges = this.adjacencyList[vertex1];
    let vertex2Edges = this.adjacencyList[vertex2];
    let newVertex1Edges = vertex1Edges.filter(edge => edge !== vertex2);
    let newVertex2Edges = vertex2Edges.filter(edge => edge !== vertex1);
    this.adjacencyList[vertex1] = newVertex1Edges;
    this.adjacencyList[vertex2] = newVertex2Edges;
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let vertex2 = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertex2);
    }
    delete this.adjacencyList[vertex];
  }
  DFSRecursive(vertex) {
    let results = [];
    let seenVertices = {};
    this.DFSRecursiveHelper(vertex, results, seenVertices);
    return results;
  }
  DFSRecursiveHelper(vertex, results, seenVertices) {
    if (!vertex) return null;
    seenVertices[vertex] = true;
    results.push(vertex);
    this.adjacencyList[vertex].forEach(vertex2 => {
      if (!seenVertices[vertex2]) {
        this.DFSRecursiveHelper(vertex2, results, seenVertices);
      }
    });
  }
  DFSIterative(vertex) {
    let stack = [vertex];
    let seenVertices = {};
    let results = [];
    seenVertices[vertex] = true;
    while (stack.length) {
      let inspectingVertex = stack.pop();
      results.push(inspectingVertex);
      this.adjacencyList[inspectingVertex].forEach(vertex2 => {
        if (!seenVertices[vertex2]) {
          seenVertices[vertex2] = true;
          stack.push(vertex2);
        }
      });
    }
    return results;
  }
  BFS(vertex) {
    let queue = [vertex];
    let results = [];
    let seenVertices = {};
    seenVertices[vertex] = true;
    let inspectingVertex;

    while (queue.length) {
      inspectingVertex = queue.shift();
      results.push(inspectingVertex);
      this.adjacencyList[inspectingVertex].forEach(neighbor => {
        if (!seenVertices[neighbor]) {
          seenVertices[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

let g = new Graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');

g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('b', 'd');
g.addEdge('c', 'e');
g.addEdge('d', 'e');
g.addEdge('e', 'f');

console.log(g.DFSIterative('a'));
