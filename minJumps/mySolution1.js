function minJumps(arr) {
    //start from the first entry
    let i = 0;
    let count = 0;
  
    //check that we aren't already at the end of the array
    if (arr.length < 2) return 0;
  
    while (arr[i] < arr.length - 1 - i && arr[i] > 0) {
      //loop through the next arr[i] elements to find the max
      //keep track of the index of the max number as well
      let max = -1;
      let maxIndex = null;
      for (let j=i+1 ; j <= i+arr[i] ; j++) {
        if (arr[j] > max) {
          max = arr[j];
          maxIndex = j;
        }
      }
      //once the max is found, jump to that point and add 1 to count
      i = maxIndex;
      count++;
    }
  
    //return infinity if we are on 0 but not the end of the array
    if (arr[i] === 0 && i !== arr.length-1) return Infinity;
  
    //return 1 more than the current count since we jumped out of the loop
    //once we reach a number that can jump to the end;
    return ++count;
  
  }
  
  console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));  // should print 3
  console.log(minJumps([1, 3, 6, 1, 0, 9]));  // should print 3
  console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]));  // should print Infinity
  console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));  // should print 4