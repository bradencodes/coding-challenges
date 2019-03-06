function commonCharacterCount(s1, s2) {
    let ccc = 0;
    //sort both strings both strings alphabetically
    let sorted1 = s1.split('').sort();
    let sorted2 = s2.split('').sort();    
    
    //have a pointer starting at the beginning of both strings
    let p1 = 0;
    let p2 = 0;
    
    while(sorted1[p1] && sorted2[p2]) {
        let char1 = sorted1[p1];
        let char2 = sorted2[p2];
        //if both pointers equal eachother, increment both and the common char count
        if (char1 === char2) {
            p1++;
            p2++;
            ccc++;
        }
        //if not equal, increment the pointer of the lesser char
        else if (char1 < char2) p1++;
        else p2++;
    }
    
    return ccc;
    
}
