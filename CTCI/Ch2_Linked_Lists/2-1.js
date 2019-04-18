// === Chapter 2 Linked Lists ===

/*
  2.1 Remove Dups:
     Write code to remove duplicates from an unsorted linked list. 
    FOLLOW UP 
    How would you solve this problem if a temporary buffer is not allowed?  
*/

// My Implementation
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function removeDups(ll){
    let hash = {};
    let curr = ll;
    while (curr){
        hash[curr.val] = true;
        if (curr.next && hash[curr.next.val]) curr.next = curr.next.next;
        else curr = curr.next;
    }

    return ll;
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

let test1 = [1,2,1,3,1,4,2,5,3,6];

console.log(ll2a(removeDups(a2ll(test1))));