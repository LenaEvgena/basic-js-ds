const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  getUnderlyingList() {
    // // remove line with error and write your code here
    return this.start;
  }

  enqueue(value) {
    // // remove line with error and write your code here
    let nodeNew = new ListNode(value);

    if (!this.size) {
      this.start = nodeNew;
      this.end = this.start;

    } else {
      this.end.next = nodeNew;
      this.end = nodeNew;
    }

    this.size++;
  }

  dequeue() {
    // // remove line with error and write your code here
    let currElem = this.start;
    this.start = this.start.next;
    this.size--;

    return currElem.value;
  }
}
