class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );

  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFS_Recursive(vertex) {
    let results = [];
    let visited = {};

    const dfs = (vertex) => {
      if(!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      
      this.adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor);
        }
      });

    } 

    dfs(vertex);
    console.log("Final results are:", results);
    return results;
  }

  DFS_Iterative(vertex) {
    let visited = {};
    let results = [];
    let s = [];
    s.push(vertex);
    while(s.length > 0) {
      const node = s.pop();
      if(!visited[node]) {
        visited[node] = true;
        results.push(node);
        this.adjacencyList[node].forEach(neighbor => {
          s.push(neighbor);
        })
      }
    }
    console.log("Final results are:", results);
    return results;
  }

  BFS(vertex) {
    let queue = [vertex];
    let visited = {};
    let results = [];
    let current;
    visited[vertex] = true;
    while(queue.length) {
      current = queue.shift();
      results.push(current);
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    console.log("Final results are:", results);
    return results;
  }
}

var g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.BFS("A");

console.log(g);