// URL = https://leetcode.com/problems/longest-palindromic-substring/

// My Solution
var longestPalindrome = function(s) {
    if (!s.length) return "";
    
    let longest = [0, 0]; // store the indices to slice at end
    
    // increment center by 0.5 starting from c=0 to c<s.length
    for (let c = 0 ; c < s.length ; c += 0.5){
        let l = Math.floor(c);
        let r = Math.ceil(c);
        
        // while left and right are part of the string, and are equal chars
        while (l >= 0 && r < s.length && s[l] === s[r]){
            if (r-l > longest[1]-longest[0]) longest = [l, r];
            l--;
            r++;            
        }
    }
    
    return s.slice(longest[0], longest[1]+1);
};
