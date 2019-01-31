function makeBoard(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
        board.push([]);
        for (let j = 0; j < n; j++) {
            board[i].push(false);
        }
    }
    board.toggle = (i, j) => {
        board[i][j] = !board[i][j];
    };
    board.hasBeenVisited = (i, j) => {
        return board[i][j];
    };
    return board;
}

function countPaths(n) {
let pathCount = 0;
let board = makeBoard(n);

const traverse = (i, j) => {
    if (i === n-1 && j === n-1){
        pathCount++;
        return;
    }
    if (i >= n || i < 0 || j >= n || j < 0){
        return;
    }
    if (board.hasBeenVisited(i, j)){
        return;
    }
    else {
        board.toggle(i,j);
        traverse(i, j+1);
        traverse(i+1, j);
        traverse(i, j-1);
        traverse(i-1, j);
        board.toggle(i,j);
    }
    };

    traverse(0,0);
    return pathCount;
}