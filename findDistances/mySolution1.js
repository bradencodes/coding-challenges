function findDistances(network) {
    let conns = {}; //connections
    let cptl = null; //capital

    for (let i = 0 ; i < network.length ; i++){
        let city = i;
        let conn = network[i]; //connection

        if (!conns[conn]) conns[conn] = [];

        //look for i = network[i] and store as capital
        if (city === conn) cptl = city;

        //store element in `conns` with network value as key and index as value by push onto array
        else conns[conn].push(city);
    }

    //initialize an array for the direct connections starting from the capital, 
    // and the distances array to return
    let dc = conns[cptl]; //direct connections
    let dsts = []; //distances

    for (let i = 0 ; i < network.length-1 ; i++){
        //add the amount of direct connections to the dsts array
        dsts.push(dc.length);

        //create the next layer of connections, which are composed of all direct connections
        // to the current connections
        let nl = []; //next layer
        for (let j=0 ; j < dc.length ; j++) {
            if (!conns[dc[j]]) continue;
            nl = nl.concat(conns[dc[j]]);
        }

        //move on to the next layer of connections
        dc = nl;
    }

    return dsts;
}

let testarr = [9, 1, 4, 9, 0, 4, 8, 9, 0, 1]
console.log(findDistances(testarr));