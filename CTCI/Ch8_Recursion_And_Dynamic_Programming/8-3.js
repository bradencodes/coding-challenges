// === Chapter 8 Recursion and Dynamic Programming ===

/*
    Magic Index: A magic index in an array A [e ... n -1] is defined to be an index such that A[ i] = i.
    Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A. 
*/

// My Implementation
function magicIndex(array, left = 0, right = array.length){
    let middle = Math.floor((left + right) / 2);

    if(right-left < 1) return null;
    if(array[middle] === middle) return middle;
    if(array[middle] > middle) return magicIndex(array, left, middle-1);
    return magicIndex(array, middle+1, right);
}

let test1 = [-2,-1,0,3,7,9];;
console.log(magicIndex(test1));