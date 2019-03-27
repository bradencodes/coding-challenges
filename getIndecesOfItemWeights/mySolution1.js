function getIndicesOfItemWeights(arr, limit) {
  let hash = {};
  //iterate through the array
  for (let i = 0 ; i < arr.length ; i++) {
    let item = arr[i]; //4
    let complement = limit-item; //4
    //check for the complement in the hash table 
    if (complement in hash) {
      return [i, hash[complement]];
    }

    //for each item, add it to a hash table where the key is the weight 
    hash[item] = i;
  }

  return [];

}

/* Some simple console.log tests */
console.log(getIndicesOfItemWeights(
  [4, 6, 10, 15, 16],
  21
));   // should print [3, 1]

console.log(getIndicesOfItemWeights(
  [4, 4],
  8
));   // should print [1, 0]

console.log(getIndicesOfItemWeights(
  [12, 6, 7, 14, 19, 3, 0, 25, 40],
  7
));   // should print [6, 2]

console.log(getIndicesOfItemWeights(
  [9],
  9
));   // should print []