class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleyLinkedList {
  constructor() {
    this.head = null;
  }
  addNode(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  displayList() {
    let current = this.head;
    if (current == null) return;

    while (current.next !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let list = new SingleyLinkedList();

list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);

console.log("The list in reverse order:");
list.displayList();
