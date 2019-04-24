// URL: https://leetcode.com/problems/longest-common-prefix/submissions/

// My Solution:

var longestCommonPrefix = function(strs) {
    let ans = "";
    if (!strs.length) return ans;
    for (let c = 0 ; c < strs[0].length ; c++){
        let char = strs[0][c];
        for (let i = 1 ; i < strs.length ; i++){
            let word = strs[i];
            if (word[c] !== char) return ans;
        }
        ans += char;
    }
    
    return ans;
};