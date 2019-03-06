function isLucky(n) {
    let narr = n.toString().split('');
    
    let half = Math.floor(narr.length / 2);
    
    let first = 0;
    let second = 0;
    
    for (i=0 ; i < narr.length ; i++){
        if (i<half) first += parseInt(narr[i]);
        else second += parseInt(narr[i]);
    }
    
    return first === second;
}