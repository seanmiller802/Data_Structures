class Graph {
  constructor() {
    this.ajacencyList = {};
  }

  addVertex(vertex) {
    if(!this.ajacencyList[vertex]) {
      this.ajacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.ajacencyList[vertex1].push(vertex2);
    this.ajacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {

    this.ajacencyList[vertex1] = this.ajacencyList[vertex1].filter(
      v => v !== vertex2
    );

    this.ajacencyList[vertex2] = this.ajacencyList[vertex2].filter(
      v => v !== vertex1
    );
    
  }
}

var g = new Graph();

g.addVertex('pineapple');
g.addVertex('apple');
g.addVertex('watermelon');
g.addEdge('pineapple', 'apple');
g.addEdge('watermelon', 'apple');
g.removeEdge('watermelon', 'apple');
console.log(g);