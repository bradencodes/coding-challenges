function longestConsec(strarr, k) {
    let n = strarr.length;
    if (n = 0 || k > n || k <= 0) return "";
    
    let longestString = "";
    
    for (i=0 ; i < strarr.length - k+1 ; i++) {
       let string = strarr.slice(i, i+k).join('');
       if (string.length > longestString.length) longestString = string;
    }
    
    return longestString;
}