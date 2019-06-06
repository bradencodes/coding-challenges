// === Chapter 10 Sorting and Searching ===

/*
    Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to each other. 
*/

// // My Implementation
// function Sob(string){
//   this.s = string;
//   this.sS = string.split("").sort().join("");
// }

// function groupAnagrams(array){
//   let result = array.map(string => new Sob(string));
//   let sortFunc = (a,b) => a.sS > b.sS;
//   result = result.sort(sortFunc);

//   return result.map(sob => sob.s);
// }

// console.log(groupAnagrams(["cdb","abc","bcd","bca", "a", "ab", "ba"]));

// Book Revision
function groupAnagrams(array) {
    let hash = {};
    for (let i = 0 ; i < array.length ; i++) {
        let sortedWord = array[i].split("").sort().join("");
        if(hash[sortedWord] !== undefined) hash[sortedWord].push(array[i]);
        else hash[sortedWord] = [array[i]];
    }

    let result = [];
    Object.keys(hash).forEach(group => result = result.concat(hash[group]));

    return result;
}

console.log(groupAnagrams(["cdb","abc","bcd","bca", "a", "ab", "ba"]));