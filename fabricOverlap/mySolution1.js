function countOverlap(file) {
    //create a 1000x1000 2d array filled with 0's
    let fabric = Array(1000).fill(Array(1000).fill(0));
    let overlap = 0;
  
    //parse the file line by line
    // let fs = require("fs");
    // let textByLine = fs.readFileSync(file).toString().split('\n');
    let textByLine = file.split('\n');

    //for every line, parse the values from it as follows...
    // #1 @ 1,3: 2x4 -> c=1 r=3 w=2 h=4
    for(let i=0 ; i<textByLine.length ; i++) {
        let line = textByLine[i]; //?
        let re = /(\d+),(\d+):\s(\d+)x(\d+)/g;
        let parsed = re.exec(line); //?
        let c = parseInt(parsed[1]); //?
        let r = parseInt(parsed[2]); //?
        let w = parseInt(parsed[3]); //?
        let h = parseInt(parsed[4]); //?

        for (let x=c ; x<c+w ; x++) {
            for(let y=r ; y<r+h ; y++) {
                console.log(y);
                console.log(x);
                fabric[y][x]++; //?
                if (fabric[y][x] === 2) overlap++;
            }
        }
    }
        
    return overlap;
}

let testFile = 'input.txt';

let testText = "#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2"

console.log(countOverlap(testText));