function rotateImage(a) {
    let n = a.length;
    let rotatedImage = [];
    for (let i=0 ; i < n ; i++){
        rotatedImage[i] = a[i].slice()
    }
    
    for (let x=0 ; x < n ; x++){
        for(let y=0 ; y < n ; y++) {
            rotatedImage[y][n-1-x] = a[x][y];
        }
    }
    
    return rotatedImage;
}