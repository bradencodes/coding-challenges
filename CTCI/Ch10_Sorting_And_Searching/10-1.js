// === Chapter 10 Sorting and Searching ===

/*
    Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order. 
*/

// My Implementation
function getLastValIndex(array){
    let p = array.length-1;
    while(array[p] === null) p--;
    return p;
}

function sortedMerge(a, b){
    let pA = getLastValIndex(a);
    let pB = b.length-1;
    let sI = a.length-1;

    while (pB >= 0){
        let aVal = a[pA];
        let bVal = b[pB];
        if(aVal > bVal){
            a[sI] = aVal;
            pA--;
        }else{
            a[sI] = bVal;
            pB--;
        }
        sI--;
    }
    return a;
}

let a = [1,2,7,null];
let b = [0];

console.log(sortedMerge(a,b));