function solution(input, markers) {
    let starr = input.split('');
    let mo = {}; // Markers object for checking if char is a marker in constant time
    let add = true; // Bool that specifies if a char should be added
    let whitespace = ''; // Keep track of extra whitespace
    let result = '';
    
    for (let i = 0 ; i < markers.length ; i++){
        let mark = markers[i];
        mo[mark] = true;
    }
    
    for (let i = 0 ; i < starr.length ; i++){
        let char = starr[i];
        if (mo[char]){
            add = false;
            whitespace = '';
        }
        else if (char === '\n') 
            add = true;
            
        if (add === true) {
            if (char === ' ')
                whitespace += char;
            else {
                result += whitespace + char;
                whitespace = '';
            }
        }
    }
    
    return result;
};