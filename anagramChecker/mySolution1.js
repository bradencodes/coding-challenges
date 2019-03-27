function anagrams(word, words) {
  let sortedMatchWord = word.split('').sort().join();
  let returnArray = [];
  
  //loop through the words array
  for (let i=0 ; i < words.length ; i++) {
    //sort the letters in the word
    let sortedWord = words[i].split('').sort().join();
    //if the sorted word is equal to the word, add it to a return array
    if (sortedMatchWord === sortedWord) returnArray.push(words[i]);
  }
  
  return returnArray;
}