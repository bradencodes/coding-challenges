function findLongestSubarrayBySum(s, arr) {
    // Create two pointers, each starting at the beginning of `arr`
    let [p1, p2] = [0, 0];
    let total = arr[0];
    let [maxStart, maxEnd] = [0, -1];
    
    // Increase the second pointer, adding to the total until it is greater than s
    // Increase the first pointer, sutracting from the total until it is less than s
    // If at any point the total is equal to s, make the endpoints the return value
    //if the difference of endpoints is larger than the previous pair
    while (p2 < arr.length){
        if (total > s && p1 < p2){
            total -= arr[p1];
            p1++;
        }
        else if (total === s && p2-p1 > maxEnd-maxStart){
            [maxStart, maxEnd] = [p1, p2];
            p2++;
            total += arr[p2];
        }
        else{
            p2++;
            total += arr[p2];
        }
    }
    
    return maxEnd === -1 ? [-1] : [maxStart+1, maxEnd+1];
}
