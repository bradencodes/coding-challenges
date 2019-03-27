function paon(arr) {
  //make a big array of length arr.length with an array at each index
  let bigArray = [];
  for (let i = 0 ; i < arr.length ; i++){
    bigArray.push([].concat(arr));
  }

  //loop through the big array and remove arr[i]
  for (let i = 0 ; i < bigArray.length ; i++){
    bigArray[i].splice(i, 1);

    //after that, reduce the sub array to the product of all numbers
    let multiply = (a, b) => a*b;
    bigArray[i] = bigArray[i].reduce(multiply);
  }

  //return the big array
  return bigArray;
}

console.log(paon(
  [1, 2, 3, 4, 5]
));   // should print [120, 60, 40, 30, 24]

console.log(paon(
  [9, 90]
));   // should print [90, 9]