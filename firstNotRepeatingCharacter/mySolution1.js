function firstNotRepeatingCharacter(s) {
    let characters = Array(26).fill(Infinity);
    
    for(let i=0 ; i < s.length ; i++) {
        let charNum = s.charCodeAt(i) - 97;
        
        if (characters[charNum] === Infinity) characters[charNum] = i;
        else if(characters[charNum] !== -1) characters[charNum] = -1;
    }
    
    let firstNonRepeat = '_';
    let currentFirst = Infinity;
    
    for(let i=0 ; i < characters.length ; i++) {
        if (characters[i] < currentFirst && characters[i] > -1) {
            firstNonRepeat = s[characters[i]];
            currentFirst = characters[i];
        }
    }
    
    return firstNonRepeat;
}
