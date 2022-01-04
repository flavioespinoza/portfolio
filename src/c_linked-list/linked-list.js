
// A linked list is a data structure that stores multiple values 
// in a linear fashion. Each value in a linked list is contained 
// in its own node, an object that contains the data along with a 
// link to the next node in the list. The link is a pointer to 
// another node object or null if there is no next node. If each 
// node has just one pointer to another node (most frequently called next) 
// then the list is considered a singly linked list (or just linked list) 
// whereas if each node has two links (usually previous and next) then 
// it is considered a doubly linked list.
class LinkedList {
  constructor(...values) {
    this.head = null;
    this.length = 0;
    this.addToHead(...values);
  }
  _addSingleItemToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  addToHead(...values) {
    values.forEach((value) => this._addSingleItemToHead(value));
    return this;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  find(val) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.value === val) {
        return thisNode;
      }
      thisNode = thisNode.next;
    }
    return thisNode;
  }

  remove(val) {
    if (this.length === 0) {
      return undefined;
    }
    if (this.head.value === val) {
      return this.removeFromHead();
    }
    let previousNode = this.head;
    let thisNode = previousNode.next;
    while (thisNode) {
      if (thisNode.value === val) {
        break;
      }
      previousNode = thisNode;
      thisNode = thisNode.next;
    }
    if (thisNode === null) {
      return undefined;
    }
    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }
}

const list = new LinkedList('a').addToHead('b', 'c', 'd');

console.log(JSON.stringify(list, null, 2));
