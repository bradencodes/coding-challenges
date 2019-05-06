// URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// My Solution
var letterCombinations = function(digits) {
    let ans = [];
    
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    function combo(string, nextDigits) {
        if (nextDigits.length < 1) {
            ans.push(string)
        }
        else {
            let digit = +nextDigits.charAt(0);
            let letters = map[digit];
            for (let i = 0 ; i < letters.length ; i++){
                combo(string + letters[i], nextDigits.slice(1, nextDigits.length));
            }
        }
    }
    
    
    if (digits.length > 0) combo('', digits);
    return ans;
};