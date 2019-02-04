function isCryptSolution(crypt, solution) {
    
    let solutionHash = {}
    for (let i=0 ; i < solution.length ; i++) {
        let pair = solution[i];
        solutionHash[pair[0]] = pair[1];
    }
    
    function wordToStringNum(word, hash) {
        let string = "";
        for (let i=0 ; i < word.length ; i++) {
            string += hash[word[i]]
        }
        return string;
    }
    
    let sn1 = wordToStringNum(crypt[0], solutionHash);
    let sn2 = wordToStringNum(crypt[1], solutionHash);
    let sn3 = wordToStringNum(crypt[2], solutionHash);
    
    if ( (sn1[0] == 0 && sn1.length>1) || (sn2[0] == 0 && sn2.length>1) || (sn3[0] == 0 && sn3.length>1) ) return false;
    
    return (parseInt(sn1) + parseInt(sn2) === parseInt(sn3))
}
