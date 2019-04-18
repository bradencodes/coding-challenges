// === Chapter 2 Linked Lists ===

/*
  2.3 Delete Middle Node:
    Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
*/

// My Implementation
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function deleteNode(node){
    if (node.next){
        node.val = node.next.val;
        node.next = node.next.next;
    } else {
        node = null;
    }
}

function a2ll(array){
    let ll = new Node(array[0]);
    let curr = ll;
    for (let i = 1 ; i < array.length ; i++){
        curr.next = new Node(array[i]);
        curr = curr.next;
    }
    return ll;
}

function ll2a(ll){
    let arr = [];
    let curr = ll;
    while (curr){
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

let ll = a2ll(['a', 'b', 'c', 'd', 'e', 'f']);
let c = ll.next.next;
deleteNode(c);

console.log( ll2a(ll) );