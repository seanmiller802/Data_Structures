class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
    }

    find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
      var queue = [],
          visited = [],
          node = this.root;

      queue.push(node);
      
      while(queue.length) {
        var node = queue.shift();
        visited.push(node.value);
        if(node.left) {
          queue.push(node.left);
        }
        if(node.right) {
          queue.push(node.right);
        }
      }

      console.log("DATA IS:", visited);
      return visited;
    }

    DFSPreOrder() {
      var visited = [];
      var current = this.root;

      const traverse = (node) => {
        visited.push(node.value);
        if(node.left) {
          traverse(node.left);
        }
        if(node.right) {
          traverse(node.right);
        }
      }

      traverse(current);
      console.log("VISITED NODES ARE", visited);
      return visited;

    }

    DFSPostOrder() {
      var visited = [];
      var current = this.root;

      const traverse = (node) => {
        if(node.left) {
          traverse(node.left);
        }
        if(node.right) {
          traverse(node.right);
        }
        visited.push(node.value);
      }

      traverse(current);

      console.log("Visited the nodes in this order", visited);
      return visited;
    }

}

//      10
//   6     15
// 3  8      20

// 3 8 7 11 20 15 10

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20);

tree.DFSPostOrder();






