// URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// My Solution:

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let hash = {};
    let p1 = 0;
    let p2 = 0;
    let max = 0;
    
    for (; p2 < s.length ; p2++){
        let char = s[p2];
        
        if(hash[char] === undefined || hash[char] < p1){
            hash[char] = p2;
            if (p2-p1+1 > max) max = p2-p1+1;
        }
        
        else{
            p1 = hash[char]+1;
            hash[char] = p2;
        }
    }
    
    return max;
};
