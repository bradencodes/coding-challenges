function arrayMaxConsecutiveSum2(inputArray) {
    let sum = Array(inputArray.length);
    sum[0] = inputArray[0];
    let max = sum[0];
    
    for (let i = 1 ; i < sum.length ; i++){
        sum[i] = Math.max(sum[i-1] , 0) + inputArray[i];
        max = Math.max(sum[i], max);
    }
    
    return max;
}
