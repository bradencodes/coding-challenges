// === Chapter 1 Arrays and Strings ===

/*
  1.6 String Compression:
      Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/

// My Implementation
function compress(s){
    let starr = s.split('');
    let count = 1;
    let compressed = [];
    for (let i = 0 ; i < starr.length ; i++){
      let char = starr[i];
      let next = starr[i+1];
      if (char === next){
        count++;
      }
      else {
        compressed.push(char);
        compressed.push(count);
        count = 1;
      }
    }
  
    return compressed.length < s.length ? compressed.join('') : s;
  }
  
console.log(compress('aabcccccaaa'));