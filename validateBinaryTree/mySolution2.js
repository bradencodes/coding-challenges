class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

//===== solution 2 =====
function isBinarySearchTree2(root) {
  let array = [];

  //convert tree to array by pushing left, then value, then right recursively
  function treeToArray(tree) {
    if (tree.left) treeToArray(tree.left);
    if (array.length > 0 && array[array.length-1] > tree.value) return false;
    array.push(tree.value);
    if (tree.right) treeToArray(tree.right);

    return true;
  }

  return treeToArray(root);
}