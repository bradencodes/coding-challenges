// URL: https://leetcode.com/problems/container-with-most-water/

// My Solution:

var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    let max = Math.min(height[l], height[r]) * (r-l);
    while(l < r){
        if (height[l] < height[r]) l++
        else r--;
        let newArea = Math.min(height[l], height[r]) * (r-l);
        max = Math.max(newArea , max);
    }
    
    return max;
};