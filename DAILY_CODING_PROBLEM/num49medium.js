/*
Problem #49[Medium]

Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.
*/

function mcs(a) {
    let max = 0;
    let ct = 0;

    for(let i = 0 ; i < a.length ; i++){
    let n  = a[i];
    //if num < 0 && -num > ct, set ct to 0;
    if(n < 0 && -n > ct) ct = 0;
    //else, add num to ct and set max of max and ct
    else {
        ct += n;
        max = Math.max(max, ct);
    }
    }

    return max;
}

let test1 = [34, -50, 42, 14, -5, 86];
let test2 = [-5, -1, -8, -9];

console.log(mcs(test2));