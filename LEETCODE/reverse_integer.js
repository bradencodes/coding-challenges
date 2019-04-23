// URL = https://leetcode.com/problems/reverse-integer/

// My Solution:
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let num = x * sign;
    ans = num.toString().split('').reverse().join('');
    return ans > 2147483648 ? 0 : ans * sign;
};

// Revised Solution:
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let num = x * sign;
    let ans = 0;
    while (num){
        let digit = num % 10;
        num = (num - digit) / 10;
        ans = ans * 10 + digit;
    }
    maxInt = 2147483648;
    return ans > maxInt ? 0 : ans * sign;
};