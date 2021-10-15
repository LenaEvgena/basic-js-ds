const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    this.rootNode = addNodeInside(this.rootNode, data);

    function addNodeInside(node, data) {
      if (!node) { return new Node(data); }

      if (data === node.data) { return node; }

      if (data < node.data) {
        node.left = addNodeInside(node.left, data);
      } else {
        node.right = addNodeInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchNodeInside(this.rootNode, data);

    function searchNodeInside(node, data) {
      if (!node) { return false; }

      if (node.data === data) { return true; }

      return node.data > data ?
      searchNodeInside(node.left, data) :
      searchNodeInside(node.right, data);
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findNodeInside(this.rootNode, data);

    function findNodeInside(node, data) {
      if (!node) { return null; }

      if (node.data === data) { return node; }

      return node.data > data ?
      findNodeInside(node.left, data) :
      findNodeInside(node.right, data);
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    this.rootNode = removeNodeInside(this.rootNode, data);

    function removeNodeInside(node, data) {
      if (!node) { return null; }

      if (data < node.data) {
        node.left = removeNodeInside(node.left, data);
        return node;

      } else if (data > node.data) {
        node.right = removeNodeInside(node.right, data);
        return node;

      } else {

        if (!node.left && !node.right) { return null; }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNodeInside(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    let minimum = itIsMin(this.rootNode);

    function itIsMin(node) {
      if (node.left === null) {
        return node;
      } else {
        return itIsMin(node.left)
      }
    }

    return minimum.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    let maximum = itIsMin(this.rootNode);

    function itIsMin(node) {
      if (node.right === null) {
        return node;
      } else {
        return itIsMin(node.right)
      }
    }

    return maximum.data;
  }
}
