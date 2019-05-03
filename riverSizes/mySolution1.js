function riverSizes(array) {
    let a = array.map(arr => arr.slice());
    let ans = [];

    function findLength(r, c){
        if (typeof a[r] == 'undefined' || typeof a[r][c] == 'undefined' || a[r][c] === 0) return 0;
        a[r][c] = 0;
        return 1 + findLength(r-1, c) + findLength(r+1, c) + findLength(r, c-1) + findLength(r, c+1);
    }

    for (let r = 0 ; r < a.length ; r++){
        for (let c = 0 ; c < a[r].length ; c++){
            if(a[r][c] === 1) ans.push(findLength(r, c));
        }
    }

    return ans;
}

let sample = [  [1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [1, 0, 1, 1, 1],
                [1, 0, 1, 1, 0],    ];

console.log(riverSizes(sample));