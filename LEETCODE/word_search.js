// URL = https://leetcode.com/problems/word-search/submissions/

// My Solution
var exist = function(board, word) {
    
    function helper(str, r, c){
        if (typeof board[r] == 'undefined' || typeof board[r][c] == 'undefined' || !board[r][c]) return false;
        
        let letter = board[r][c];
        str += letter;
        board[r][c] = false;
        if(str == word){
            board[r][c] = letter;
            return true;
        }
        else if(str.length >= word.length){
            board[r][c] = letter;
            return false;
        }
        else if(str == word.slice(0, str.length)) {

            if( helper(str, r+1, c) ) return true;
            
            if( helper(str, r-1, c) ) return true;
            
            if( helper(str, r, c+1) ) return true;
            
            if( helper(str, r, c-1) ) return true;
            
            board[r][c] = letter;
            
            return false;
        }
        else{
            board[r][c] = letter;
            return false;
        }
    }
    
    for (let r = 0 ; r < board.length ; r++){
        for (let c = 0 ; c < board[0].length ; c++){
            if(helper('', r, c)) return true;
        }
    }
    
    return false;
};