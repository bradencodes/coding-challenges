function matrixElementsSum(matrix) {
    let suitable = Array(matrix[0].length).fill(true);
    let total = 0;
    
    for (let r=0 ; r<matrix.length ; r++) {
        let row = matrix[r];
        for (let c=0; c<suitable.length ; c++) {
            if (row[c] === 0) suitable[c] = false;
            if (suitable[c]) total += row[c];
        }
    }
    
    return total;
}
