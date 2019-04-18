// === Chapter 1 Arrays and Strings ===

/*
  1.9 String Rotation:
    Assume you have a method isSubst ring which checks if one word is a substring of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
*/

// My Implementation
function isSubstring(sub, string){
    return string.includes(sub);
  }
  
  function stringRotation(str1, str2){
    let double = str2 + str2;
    return isSubstring(str1, double);
}

console.log(stringRotation("waterbottle", "erbottlewat"));