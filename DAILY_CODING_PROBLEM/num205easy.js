/*
Problem #205[Easy]

This problem was asked by IBM.

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.
*/

const nextPerm = num => {
  let numArr = num
    .toString()
    .split('')
    .map(s => +s); //results in an array of each digit
  //iterate from end to start
  for (let i = numArr.length - 2; i >= 0; i--) {
    //if num[i] < num[i+1]
    if (numArr[i] < numArr[i + 1]) {
      //swap the values, and reverse the numbers after i
      [numArr[i], numArr[i + 1]] = [numArr[i + 1], numArr[i]];
      numArr = numArr
        .slice(0, i + 1)
        .concat(numArr.slice(i + 1, numArr.length).reverse());
      break;
    }
  }

  let result = +numArr.join('');
  if (result === num) return `${num} has no next permutation`;
  else return result;
};

console.log(nextPerm(321));
