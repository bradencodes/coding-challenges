// === Chapter 1 Arrays and Strings ===

/*
  1.8 Zero Matrix:
    Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.
*/

// My Implementation
function zeroMatrix(matrix){
    let zrows = new Array(matrix.length).fill(false);
    let zcols = new Array(matrix[0].length).fill(false);
  
    for (let r = 0 ; r < matrix.length ; r++){
      for (let c = 0 ; c < matrix[0].length ; c++){
        if (matrix[r][c] === 0){
          zrows[r] = true;
          zcols[c] = true;
        }
      }
    }
  
    for (let r = 0 ; r < matrix.length ; r++){
      for (let c = 0 ; c < matrix[0].length ; c++){
        if (zrows[r] || zcols[c]) matrix[r][c] = 0;
      }
    }
  
    return matrix;
}

let test1 = [
[1, 2, 7, 4, 0],
[9, 0, 8, 2, 7],
[5, 6, 2, 5, 6]
];

console.log(zeroMatrix(test1));