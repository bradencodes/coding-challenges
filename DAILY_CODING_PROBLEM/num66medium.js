/*
    This problem was asked by Square.

    Assume you have access to a function toss_biased() which
    returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or
    100-0). You do not know the bias of the coin.

    Write a function to simulate an unbiased coin toss.
*/

//My Solution
function getBiasedFlip(){
    let rand = Math.random();
    return rand < 0.7 ? 0 : 1;
  }
  
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
  function getUnbiasedFlip(){
    let flips = [0, 0];
  
    while (arraysEqual(flips, [0, 0]) || arraysEqual(flips, [1, 1])){
      flips[0] = getBiasedFlip();
      flips[1] = getBiasedFlip();
    }
  
    return arraysEqual(flips, [0, 1]) ? 0 : 1;
  }
  
  let isUnbiased = 0;
  for (let i = 0 ; i < 1000 ; i++){
    isUnbiased += getUnbiasedFlip();
  }
  
  console.log(isUnbiased / 1000);
  
  let isBiased = 0;
  for (let i = 0 ; i < 1000 ; i++){
    isBiased += getBiasedFlip();
  }
  
  console.log(isBiased / 1000);