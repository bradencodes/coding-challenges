function rotateImage(a) {
    //swap the x and y values
    for (let x=0 ; x < a.length ; x++) {
        for (let y=0 ; y < x ; y++) {
            [a[x][y] , a[y][x]] = [a[y][x] , a[x][y]]
        }
    }
    
    //reverse each array;
    for (let r=0 ; r < a.length ; r++){
        a[r] = a[r].reverse();
    }
    
    return a;
}
