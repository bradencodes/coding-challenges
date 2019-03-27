function inArray(array1,array2){
    return array1.filter(word1 => {
        return array2.some(word2 => {
        return word2.indexOf(word1) !== -1;
        })
    }).sort();
}