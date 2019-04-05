Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
}

function sumInRange(nums, queries) {
    let presum = Array(nums.length + 1).fill(0);
    for(let i = 1 ; i < presum.length ; i++) presum[i] = presum[i-1] + nums[i-1];
    
    let result = queries.map(
        query => presum[query[1]+1] - presum[query[0]]
    ).reduce( (a, b) => a + b );
    
    return (result).mod(1000000007);
}
