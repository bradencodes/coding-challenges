// URL: https://leetcode.com/problems/count-and-say/

// My Solution
var countAndSay = function(n) {
    function nextOne(sequence) {
        let count = 1;
        let char = sequence[0];
        let result = "";
        for(let i = 1 ; i < sequence.length ; i++){
            if(sequence[i] === char) count++;
            else {
                result += count + char;
                char = sequence[i];
                count = 1;
            }
        }
        result += count + char;
        
        return result;
        
    }
    
    let curr = "1";
    for(let i = 1 ; i < n ; i++){
        curr = nextOne(curr);
    }
    
    return curr;
};