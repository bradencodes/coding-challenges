/*
Problem #50[Easy]

This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5

You should return 45, as it is (3 + 2) * (4 + 5).
*/

function tree2ans(root) {
    switch (root.val){
        case '+':
            return tree2ans(root.left) + tree2ans(root.right);
        case '-':
            return tree2ans(root.left) - tree2ans(root.right);
        case '*':
            return tree2ans(root.left) * tree2ans(root.right);
        case '/':
            return tree2ans(root.left) * tree2ans(root.right);
        default:
            return root.val;
    }
}

function Node(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

let root = new Node('*');
root.left = new Node('+');
root.right = new Node('+');
root.left.left = new Node(3);
root.left.right = new Node(2);
root.right.left = new Node(4);
root.right.right = new Node(5);

console.log(tree2ans(root));