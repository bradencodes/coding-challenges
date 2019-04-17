// === Chapter 1 Arrays and Strings ===

/*
  1.3 URLify:
    Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
*/

// My Implementation
function urlify(s){
    return s.trim().replace(/ /g , '%20');
  }
  
console.log(urlify("Mr John Smith"));