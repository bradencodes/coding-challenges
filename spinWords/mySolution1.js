function spinWords(string){
    //put each word as an element in an array
    let wordsArr = string.split(" ");
    
    //loop through the words in the array
    for (let i=0 ; i < wordsArr.length ; i++) {
      //if the word length is longer than 4 letters, reverse it
      let word = wordsArr[i];
      if (word.length > 4) {
        let reversedWord = [];
        for (let j=word.length-1 ; j >= 0 ; j--){
          reversedWord.push(word[j])
        }
        wordsArr[i] = reversedWord.join('');
      }
    }
    //join the words with spaces and return
    return wordsArr.join(" ");
  }