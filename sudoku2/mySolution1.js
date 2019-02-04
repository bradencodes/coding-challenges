function sudoku2(grid) {
    //function `isUnique` takes an array of numbers and outputs a boolean of all the numbers being unique
    function isUnique(array) {
        let hash = {};
        for (let i=0 ; i < array.length ; i++){
            let number = array[i];
            if (hash[number]) return false;
            else if (number !== ".") hash[number] = 1;
        }
        return true;
    }
    
    //run all rows through `isUnique`
    for (let i=0 ; i < 9 ; i++){
        let row = grid[i];
        if (isUnique(row) === false) return false;
    }
    
    //run all columns through `isUnique`
    for (let c=0 ; c < 9 ; c++) {
        let column = [];
        for (let r=0 ; r < 9 ; r++) {
            if (grid[r][c] !== ".") column.push(grid[r][c]);
        }
        if (isUnique(column) === false) return false;
    }
    
    //run all 3x3 subgrids through `isUnique` (use 2 for loops that increments by 3, and 2 for loops that increment by 1 3 times)
    for (let sr=0 ; sr < 9 ; sr += 3) {
        for (let sc=0 ; sc < 9 ; sc += 3) {
            let subGrid = [];
            for (let ro=0 ; ro < 3 ; ro++) {
                for (let co=0 ; co < 3 ; co++) {
                    if (grid[sr+ro][sc+co] !== ".") subGrid.push(grid[sr+ro][sc+co]);
                }
            }
            console.log("subGrid: ", subGrid);
            if (isUnique(subGrid) === false) return false;
        }
    }
    
    return true;
}
