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

//===== solution1 =====
function isBinarySearchTree(root) {
  let array = [];

  //convert tree to array by pushing left, then value, then right recursively
  function treeToArray(tree) {
    if (tree.left) treeToArray(tree.left);
    array.push(tree.value);
    if (tree.right) treeToArray(tree.right);
  }

  treeToArray(root);

  function isSorted(array) {
    for (let i=0 ; i<array.length-1 ; i++) {
      if (array[i] > array[i+1]) return false;
    }
    return true;
  }

  //return the boolean of isSorted(array)
  return isSorted(array);
}