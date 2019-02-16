function allLongestStrings(inputArray) {
    let longestLength = 0;
    let longestStrings = [];
    
    for (let i=0 ; i<inputArray.length ; i++) {
        let string = inputArray[i];
        if (string.length === longestLength) longestStrings.push(string);
        if (string.length > longestLength) {
            longestLength = string.length;
            longestStrings = [];
            longestStrings.push(string);
        }
    }
    
    return longestStrings;
}
