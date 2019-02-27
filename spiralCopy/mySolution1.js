function spiralCopy(matrix) {
    //keep track of a top, right, bottom, and left reader
    let top = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let left = 0;
  
    let array = [];
  
    //while there are still values between our readers
    while(top !== bottom && left !== right){
      //push all the top row values from left to right
      for (let t = left ; t <= right ; t++){
        array.push(matrix[top][t]);
      }
      //bring the top reader down a row
      top++;
  
      //push all the right column values from top to bottom
      for (let r = top ; r <= bottom ; r++){
        array.push(matrix[r][right])
      }
      //bring the right reader left a column
      right--;
  
      //push all the bottom row values from right to left
      for (let b = right ; b >= left ; b--){
        array.push(matrix[bottom][b])
      }
      //bring the bottom reader up a row
      bottom--;
  
      //push all the left row values from bottom to top
      for (let l = bottom ; l >= top ; l--){
        array.push(matrix[l][left])
      }
      //bring the left reader right a column
      left++;
    }
  
    return array;
  
  }
  
  let inputMatrix = [ [1, 2, 3, 4, 5],
                      [6, 7, 8, 9, 10],
                      [11, 12, 13, 14, 15],
                      [16, 17, 18, 19, 20]
                    ];
  
  console.log( spiralCopy(inputMatrix) );