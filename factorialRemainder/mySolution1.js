function factorialRemainder(n) {
  let numArr = Array(n+1).fill(true);
  numArr[0] = false; //0 does not count towards total
  let cap = Math.sqrt(n);

  //starting from 2, increment to cap
  for (let i=2 ; i <= cap ; i++) {
    if (numArr[i]) {
      for (let j=i*i ; j<=n ; j+=i) {
        numArr[j] = false;
      }
    }
  }

  let count = 0;
  for (let c=0 ; c<numArr.length ; c++){
    if (numArr[c]) count++;
  }

  return count;
}

console.log(factorialRemainder(5));