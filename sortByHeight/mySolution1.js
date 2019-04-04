function sortByHeight(a) {
    // Create a sorted (ascending) array of only the peoples' heights
    let sp = a.filter( height => height !== -1 ).sort( (a,b) => b - a );
    
    // Replace each person-height with the largest unused value
    return a.map( height => height === -1 ? -1 : sp.pop());
}