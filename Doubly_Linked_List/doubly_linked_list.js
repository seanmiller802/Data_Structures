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
    if(!this.head) return undefined;

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

  shift() {
    if(!this.head) return undefined;
    
    var oldHead = this.head

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {

    if(idx < 0 || idx >= this.length) return null;

    var count, current;

    if(idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while(count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== idx) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(idx, val) {

    var foundNode = this.get(idx);

    if(foundNode != null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

}

let list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4);
console.log(list);

list.set(1, 'hello');

console.log(list);