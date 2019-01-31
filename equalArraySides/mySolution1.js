function findEvenIndex(arr) {
  //sum the array
  let right = arr.reduce((num, total) => num+total);
  let left = 0;
  
  //go through the array again
  for (let i=0 ; i < arr.length ; i++) {
    //subtract the current index from right
    right -= arr[i];
    //add index-1 to a new variable called left
    if (i > 0) left += arr[i-1];
    //if left === right return index
    if (left === right) return i;
  }
   
  return -1;
}