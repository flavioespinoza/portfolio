/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function (inputNode) {
  // Return the node with minimum key in the right subtree.
  if (inputNode.right !== null) {
    findMinKeyWithinTree(inputNode.right);
  }

  // Set the inputNode.parent to variable in case you need to traverse up the tree.
  let parent = inputNode.parent;
  let child = inputNode;

  // Travel up using the parent pointer until you see
  // a node which is the left child of its parent.
  // The parent of such a node is the In-Order-Successor.
  while (parent !== null && child === parent.right) {
    // Child becomes the parent.
    child = parent;
    // Parent becomes grand parent of previous child.
    parent = child.parent;
  }

  return parent;
};

function findMinKeyWithinTree(inputNode) {
  while (inputNode.left !== null) {
    inputNode = inputNode.left;
  }
  return inputNode;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
  let root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  let currentNode = root;
  let newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

// Returns a reference to a node in the BST by its key.
// Use this function when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function (key) {
  let currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) {
      return currentNode;
    }

    if (key < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

console.log(bst.root);

let test;
let success;

// Get a reference to the node whose key is:

// 9
test = bst.getNodeByKey(9);
success = test ? bst.findInOrderSuccessor(test) : null;

if (success) {
  console.log('Inorder successor of ' + test.key + ' is ' + success.key);
} else {
  console.log('Inorder successor does not exist');
}

// 11
test = bst.getNodeByKey(11);
success = test ? bst.findInOrderSuccessor(test) : null;

if (success) {
  console.log('Inorder successor of ' + test.key + ' is ' + success.key);
} else {
  console.log('Inorder successor does not exist');
}

// 14
test = bst.getNodeByKey(14);
success = test ? bst.findInOrderSuccessor(test) : null;

if (success) {
  console.log('Inorder successor of ' + test.key + ' is ' + success.key);
} else {
  console.log('Inorder successor does not exist');
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}



function searchBST(root, val) {
  if (root === null) return null;
  if (root.val === val) {
    return root;
  } else if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}

test = bst.getNodeByKey(14);
console.log(searchBST(bst.root, 14));
