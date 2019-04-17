// === Chapter 1 Arrays and Strings ===

/*
  1.2 Check Permutation:
    Given two strings, write a method to decide if one is a permutation of the other.
*/

// My Implementation
// function checkPerm(str1, str2){
//   if(str1.length === str2.length){
//     let sort1 = str1.split('').sort().join('');
//     let sort2 = str2.split('').sort().join('');
//     return sort1 === sort2;
//   }
//   return false;
// }

// Book Alternative
function checkPerm(str1, str2){
    if (str1.length !== str2.length) return false;
  
    let charr = Array(128).fill(0);
  
    for (let i = 0 ; i < str1.length ; i++){
      let c = str1.charCodeAt(i);
      charr[c]++;
    }
  
    for (let i = 0 ; i < str2.length ; i++){
      let c = str2.charCodeAt(i);
      charr[c]--;
      if (charr[c] < 0) return false;
    }
  
    return true;
  }
  
console.log(checkPerm('ciicv', 'civij'));