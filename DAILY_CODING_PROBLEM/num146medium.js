/*
Problem #146[Medium]

This question was asked by BufferBox.

Given a binary tree where all nodes are either 0 or 1, prune the tree so that subtrees containing all 0s are removed.

For example, given the following tree:

   0
  / \
 1   0
    / \
   1   0
  / \
 0   0
should be pruned to:

   0
  / \
 1   0
    /
   1
We do not remove the tree at the root or its left child because it still has a 1 as a descendant.
*/

const prune = tree => {
  if (tree === null) return;
  if (tree.left) tree.left = prune(tree.left);
  if (tree.right) tree.right = prune(tree.right);

  if (tree.left === null && tree.right === null && tree.val === 0) {
    tree = null;
    return null;
  }

  return tree;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let test = new Node(0);
test.left = new Node(1);
test.right = new Node(0);
test.right.left = new Node(1);
test.right.right = new Node(0);
test.right.left.left = new Node(0);
test.right.left.right = new Node(0);

console.log(prune(test));
