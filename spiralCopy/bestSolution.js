snail = function(array) {
    let result = [];
    while (array.length){
        //Take top
        result = result.concat(array.shift())
        
        //Take right side, then reverse each row
        for (let i = 0 ; i < array.length ; i++){
            let row = array[i];
            result.push(row.pop())
            row.reverse();
        }
        
        array.reverse();
    }
    
    return result;
}