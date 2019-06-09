// === Chapter 4 Trees and Graphs ===

/*
    List of Depths: Given a binary tree, design an algorithm which 
    creates a linked list of all the nodes at each depth 
    (e.g., if you have a tree with depth D, you'll have D linked lists).
*/

// My Implementation
function listOfDepths(root){
    let q = [root, 'next'];
    let lists = [];
    let ll = null;
    let current = null;
    while(q.length){
        let node = q.shift();
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
        if (node === 'next'){
            lists.push(ll);
            ll = null;
            current = null;
            if(q.length) q.push('next');
            continue;
        }
        if (!ll){
            ll = new Node(node);
            current = ll;
        }
        else {
            current.next = new Node(node);
            current = current.next;
        }
    }

    return lists;

}

function Node(val){
    this.value = val;
    this.next = null;
}

function TreeNode(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

let root = new TreeNode('a');
root.left = new TreeNode('b');
root.right = new TreeNode('c');
root.left.left = new TreeNode('d');
root.left.right = new TreeNode('e');
root.right.left = new TreeNode('f');
root.right.right = new TreeNode('g');

console.log(listOfDepths(root));