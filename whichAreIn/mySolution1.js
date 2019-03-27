function inArray(array1,array2){
    let r = [];

    for (let i = 0 ; i < array1.length ; i++){
        let word1 = array1[i];
        
        for (let j = 0 ; j < array2.length ; j++){
        let word2 = array2[j];
        
        if ( word2.includes(word1) ) {
            r.push(word1);
            break;
        }     
        
        }
    }

    return r.sort();
    }