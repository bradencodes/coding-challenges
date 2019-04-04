function determinant(m) {
    // Base Case
    if (m.length === 1) return m[0][0];

    // Returns the minor matrix of the major matrix where the first row
    //and specified index of each row are removed
    function minor(index, major){
        let minor = major.map(row => row.slice());
        minor.shift();
        for(let i = 0 ; i < minor.length ; i++) minor[i].splice(index, 1);
        return minor;
    }

    return m[0].map(
        (num, i) => num * determinant(minor(i, m)) * (i%2 === 0 ? 1 : -1)
    ).reduce(
        (a, b) => a + b
    )
};
