// === Chapter 2 Linked Lists ===

/*
  2.2 Return Kth to Last:
    Implement an algorithm to find the kth to last element of a singly linked list. 
*/

// My Implementation
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function kthToLast(ll, k){
    let p1 = ll;
    let p2 = ll;
    for (let i = 1 ; i < k ; i++){
        p2 = p2.next;
    }
    while(p2.next){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1.val;
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

let test1 = [5,4,3,2,1];
let test2 = [1,4,6,3,6,8];

console.log( kthToLast( a2ll(test2) , 3 ) );