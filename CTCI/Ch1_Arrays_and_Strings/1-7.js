// === Chapter 1 Arrays and Strings ===

/*
  1.7 Rotate Matrix:
    Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 
*/

// My Implementation
function rotateMatrix(matrix){
    let rightBound = 1;
    let bottomBound = Math.floor(matrix.length);
    for (let r = 0 ; r <= bottomBound ; r++){
      for (let c = r ; c < matrix.length - rightBound ; c++){
        [ 
          matrix[r][c], //point1
          matrix[c][matrix.length-1-r], //point2
          matrix[matrix.length-1-r][matrix.length - 1 - c], //point3
          matrix[matrix.length - 1 - c][r] //point4
        ]
        =
        [
          matrix[matrix.length - 1 - c][r], //point4
          matrix[r][c], //point1
          matrix[c][matrix.length-1-r], //point2
          matrix[matrix.length-1-r][matrix.length - 1 - c] //point3
        ]
      }
      rightBound++;
    }
  
    return matrix;
}
  
let test1 = [
[0, 1, 2],
[4, 5, 6],
[7, 8, 9]
];

let test2 = [
[ 0, 1, 2, 3],
[ 4, 5, 6, 7],
[ 8, 9,10,11],
[12,13,14,15],
];

let test3 = [
[ 0, 1, 2, 3, 4],
[ 4, 5, 6, 7, 9],
[ 8, 9,10,11,13],
[12,13,14,15,17],
[19,20,21,22,23]
];
  
console.log(rotateMatrix(test3));