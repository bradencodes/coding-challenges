// URL: https://leetcode.com/problems/generate-parentheses/submissions/

// My Solution
var generateParenthesis = function(n) {
    let ans = [];
    
    function helper(str, left, right) {
        if (str.length === 2 * n) {
            ans.push(str);
            return;
        }
        if (left < n) helper(str+"(", left+1, right);
        if (left > right) helper(str+")", left, right+1);
    }
    
    helper("", 0, 0);
    
    return ans;
};