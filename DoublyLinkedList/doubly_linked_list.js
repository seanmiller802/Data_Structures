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

  insert(idx, val) {

    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(idx - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;

  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return false; 
    if(idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop();
    var removedNode = this.get(idx);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

}

let list = new DoublyLinkedList();
