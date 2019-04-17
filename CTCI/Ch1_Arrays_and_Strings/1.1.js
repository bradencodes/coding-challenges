// === Chapter 1 Arrays and Strings ===

/*
  1.1 Is Unique:
    Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
*/

// My Implementation
// function isUnique(s){
//   let starr = s.split('').sort();
//   for (let i = 0 ; i < starr.length-1 ; i++){
//     let char1 = starr[i];
//     let char2 = starr[i+1];
//     if (char1 === char2) return false;
//   }
//   return true;
// }

// console.log(isUnique('false'))

// Book Implementation
function isUnique(s){
    let charr = Array(128).fill(false);
    for (let i = 0 ; i < s.length ; i++){
      let c = s.charAt(i);
      if (charr[c]) return false;
      charr[c] = true;
    }
    return true;
  }
  
console.log(isUnique('s'))