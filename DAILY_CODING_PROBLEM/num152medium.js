/*
Problem #152[Medium]

This problem was asked by Triplebyte.

You are given n numbers as well as n probabilities that sum up to 1. Write a function to generate one of the numbers with its corresponding probability.

For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.

You can generate random numbers between 0 and 1 uniformly.
*/

const probability = (nums, probs) => {
  // generate random number between 0 and 1
  const randnum = Math.random();

  // iterate through probs, and look for where randnum lands
  let running = 0;
  for (let i = 0; i < probs.length; i++) {
    running += probs[i];
    if (randnum < running) return nums[i];
  }

  return nums[nums.length - 1]; //failsafe
};

const runTest = (nums, probs, numTests) => {
  //make Object with nums as key
  let results = {};

  //increment each key when probability returns result
  for (let i = 0; i < numTests; i++) {
    const test = probability(nums, probs);
    if (results[test] === undefined) results[test] = 0;
    results[test] += 1 / numTests;
  }

  return results;
};

// console.log(runTest([1, 2, 3, 4], [0.1, 0.5, 0.2, 0.2], 1000));

console.log(
  runTest([1, 2, 3, 4, 5, 6], [0.105, 0.195, 0.3, 0, 0.1, 0.3], 100000)
);
