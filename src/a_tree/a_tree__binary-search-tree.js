/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
function Node(value) {
  this.value = value;
  // this.left = null;
  // this.right = null;
}

function insertNode(tree, value) {
  var node = tree,
    key;
  while (node.value !== value) {
    key = value < node.value ? 'left' : 'right';
    if (!node[key]) {
      node[key] = new Node(value);
      break;
    }
    node = node[key];
  }
  return tree;
}

const array = [4, 2, 7, 1, 3];
// this line creates the tree based on the array
const tree = array.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null);

// here we print to console the tree
console.log(tree);

/**
 * LeetCode Search a Binary Search Tree
 * @param {TreeNode} root
 * @param {number} value
 * @return {TreeNode}
 */
const searchBST = function (root, value) {
  if (root === null) return null;
  if (root.value === value) {
    return root;
  } else if (value < root.value) {
    return searchBST(root.left, value);
  } else {
    return searchBST(root.right, value);
  }
};

let root = [4, 2, 7, 1, 3];
let val = 2;
/**
 *
 *        4
 *       / \
 *      2   7
 *     / \
 *    1   3
 *
 * */

let expected = [2, 1, 3];
let res = searchBST(tree, val);

console.log(JSON.stringify(res, null, 2));
let response = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 3,
  },
};
