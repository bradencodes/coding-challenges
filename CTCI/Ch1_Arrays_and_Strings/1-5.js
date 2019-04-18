// === Chapter 1 Arrays and Strings ===

/*
  1.5 One Away:
     There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

// My Implementation
function wasRemoved(short, long){
    let wasDifference = false;
    let p1 = 0;
    let p2 = 0;
    while(p1 < short.length && p2 < long.length){
      if (short[p1] === long[p2]){
        p1++;
        p2++;
      }
      else if (wasDifference) return false;
      else {
        wasDifference = true;
        p2++;
      }
    }
    return true;
  }
  
  function wasChanged(str1, str2){
    let wasDifference = false;
    for (let i = 0 ; i < str1.length ; i++){
      if (str1[i] === str2[i]) continue;
      else if (wasDifference) return false;
      else wasDifference = true;
    }
    return true;
  }
  
  function oneAway(str1, str2){
    if (str1.length - str2.length < -1 || 
        str1.length - str2.length > 1) return false;
  
    if (str1.length < str2.length) return wasRemoved(str1, str2);
    else if (str1.length > str2.length) return wasRemoved(str2, str1);
    else return wasChanged(str1, str2);
  }
  
console.log(oneAway('pale', 'bake'))