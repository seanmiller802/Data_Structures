class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if(element < parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    if(this.length < 1) return null;
    const first = this.values[0];
    const last = this.values[this.values.length - 1];
    this.values[0] = last;
    this.values[this.values.length - 1] = first;
    const popped = this.values.pop();
    this.sinkDown();
    return popped;
  }

  sinkDown() {
    let parentIdx = 0;
    let leftChildIdx = (2 * parentIdx) + 1;
    let rightChildIdx = (2 * parentIdx) + 2;
    while(true) {
      if(this.values[leftChildIdx] > this.values[parentIdx] || this.values[rightChildIdx] > this.values[parentIdx]) {
        if(this.values[leftChildIdx] > this.values[rightChildIdx]) {
          let parent = this.values[parentIdx];
          this.values[parentIdx] = this.values[leftChildIdx];
          this.values[leftChildIdx] = parent;
          parentIdx = leftChildIdx;
          break;
        } else {
          let parent = this.values[parentIdx];
          this.values[parentIdx] = this.values[rightChildIdx];
          this.values[rightChildIdx] = parent;
          parentIdx = rightChildIdx;
          break;
        }
      }
    }
  }


}

let heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(120);
heap.insert(89);
heap.insert(101);
heap.insert(1000);
// heap.extractMax();
console.log(heap);