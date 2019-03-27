function validParentheses(parens){
    let open = []; //stack of open parenthesis
    let matches = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    let starr = parens.split(''); //an array of each character

    for (let i = 0 ; i < starr.length ; i++){
        let char = starr[i];
        if (char === '(' || char === '{' || char === '[') open.push(char);

        // Return false if the closed character doesn't match the last open character
        else if (matches[char] && matches[char] !== open.pop()) return false;
    }

    // Return false if there are open characters that haven't been closed.
    // Otherwise it is valid.
    return open.length === 0;
}