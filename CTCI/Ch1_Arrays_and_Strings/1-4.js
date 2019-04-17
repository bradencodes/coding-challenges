// === Chapter 1 Arrays and Strings ===

/*
  1.4 Palindrome Permutation:
    Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
*/

// My Implementation
function palPerm(s){
    let count = new Map();
    let string = s.toLowerCase().replace(/ /g , '');
    for (let i = 0 ; i < string.length ; i++){
      let char = string.charAt(i);
      if (!count.get(char)) count.set(char, 1);
      else count.set(char, count.get(char)+1);
    }
    let odds = 0;
    console.log(count);
    for (charCount of count.values()) {
      if (charCount % 2 === 1) odds++;
      if (odds > 1) return false;
    };
  
    return true;
  }
  
console.log(palPerm('Tact Coa'));