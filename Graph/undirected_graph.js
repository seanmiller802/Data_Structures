class Graph {
  constructor() {
    this.ajacencyList = {};
  }

  addVertex(vertex) {
    if(!this.ajacencyList[vertex]) {
      this.ajacencyList[vertex] = [];
    }
  }
}

var g = new Graph();

g.addVertex('pineapple');
console.log(g);