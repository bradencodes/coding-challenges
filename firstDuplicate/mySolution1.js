function firstDuplicate(a) {
    let hash = {};
    
    for (let i=0 ; i < a.length ; i++) {
        let number = a[i];
        if (hash[number]) return number;
        else hash[number] = true;
    }
    
    return -1;
}