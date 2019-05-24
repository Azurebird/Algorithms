class Heap {
  constructor() {
    this.tree = [];
    this.size = 0;
  }

  isLeaf(index) {
    if (index >= Math.floor(this.size / 2) && index < this.size) {
      return true;
    }
    return false;
  }

  swap(parent, children) {
    const temp = this.tree[parent];
    this.tree[parent] = this.tree[children];
    this.tree[children] = temp;
  }

  getParent(index) {
    return index - 1  >> 1;
  }

  getLeftChild(index) {
    return (index << 1) + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  extractMin() {
    this.swap(0, this.size - 1);
    const min = this.tree.pop();
    this.size--;

    let parentIndex = 0;

    while(!this.isLeaf(parentIndex)) {
      const rightChildIndex = this.getRightChild(parentIndex);
      const leftChildIndex = this.getLeftChild(parentIndex);
      if (this.tree[parentIndex] > this.tree[rightChildIndex] ||
            this.tree[parentIndex] > this.tree[leftChildIndex]) {

        if (this.tree[rightChildIndex] && this.tree[leftChildIndex] > this.tree[rightChildIndex]) {
          this.swap(parentIndex, rightChildIndex);
          parentIndex = rightChildIndex;
        } else {
          this.swap(parentIndex, leftChildIndex);
          parentIndex = leftChildIndex;
        }
      } else {
        break;
      }
    }

    return min;
  }

  add(item) {
    this.tree.push(item);
    this.size++;

    let children = this.size - 1;
    let parent = this.getParent(children);
    while (this.tree[parent] > item) {
      this.swap(parent, children);
      children = parent;
      parent = this.getParent(children);
    }
  }

  print() {
    console.log(this.tree);
  }
}

const heap = new Heap();
heap.add(100);
heap.add(41);
heap.add(13);
heap.add(51);
heap.add(31);
heap.add(16);
heap.print();
heap.extractMin();
heap.print();
heap.extractMin();
heap.print();
heap.extractMin();
heap.print();
heap.extractMin();
heap.print();
heap.extractMin();
heap.print();
heap.extractMin();
heap.print();