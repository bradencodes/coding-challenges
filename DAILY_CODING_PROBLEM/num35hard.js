/*
Problem #35[Hard]
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the 
values of the array so that all the Rs come first, the Gs come second, and 
the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it 
should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/


// My Solution
function rgb(arr) {
    let l = 0, r = arr.length-1

    // bring all R to front
    while(l < r) {
        if (arr[l] !== 'R' && arr[r] === 'R') {
            [ arr[l] , arr[r] ] = [ arr[r] , arr[l] ] //swap
        }
        if (arr[l] === 'R') l++
        if (arr[r] !== 'R') r--
    }

    // bring all G to back
    r = arr.length-1
    while(l < r) {
        if (arr[l] === 'G' && arr[r] === 'B') {
            [ arr[l] , arr[r] ] = [ arr[r] , arr[l] ] //swap
        }
        if (arr[l] !== 'G') l++
        if (arr[r] !== 'B') r--
    }

    return arr;
}

let test1 =['G', 'B', 'G', 'R', 'B', 'R', 'G', 'R', 'B', 'G', 'G', 'R', 'B', 'B', 'R', 'G', 'B', 'G', 'R'];
let test2 =['G', 'B', 'R', 'R', 'B', 'R', 'G'];
let test3 =['G', 'B', 'R'];
console.log(rgb(test3));
