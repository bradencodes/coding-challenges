// URL = https://leetcode.com/problems/reverse-integer/

// My Solution:
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let num = x * sign;
    ans = num.toString().split('').reverse().join('');
    return ans > 2147483648 ? 0 : ans * sign;
};