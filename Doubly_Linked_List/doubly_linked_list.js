class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;

  }

  pop() {
    if(!this.tail) return undefined;
    var poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
    }

    this.length--;
    return poppedNode; 
     
  }


}

let list = new DoublyLinkedList();
let node = new Node(78);
list.push(node);
console.log(list);
list.push(11);
console.log(list)