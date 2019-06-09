// === Chapter 4 Trees and Graphs ===

/*
    Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
*/

// My Implementation
function minTree(array, start = 0, end = array.length-1){
    if(start > end) return null;
    let mid = Math.floor( (start + end) / 2 );
    let root = new Node(array[mid]);

    root.left = minTree(array, start, mid-1);
    root.right = minTree(array, mid+1, end);

    return root;
}

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}