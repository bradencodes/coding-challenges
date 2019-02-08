let testFile = require('input_txt.txt');

function countOverlap(file) {
    //create a 1000x1000 2d array filled with 0's
    let fabric = Array(1000).fill(Array(1000).fill(0));
    let overlap = 0;
  
    //parse the file line by line
    let fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(file),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    //for every line, parse the values from it as follows...
    // #1 @ 1,3: 2x4 -> c=1 r=3 w=2 h=4
    rl.on('line', function (line) {
        let re = /#\d+\s@\s(\d+),(\d+):\s(\d+)x(\d+)/g;
        let parsed = re.exec(line);
        let c = parsed[0];
        let r = parsed[1];
        let w = parsed[2];
        let h = parsed[3];

        for (; c<c+w ; c++) {
            for(; r<r+h ; r++) {
                fabric[r][c]++;
                if (fabric[r][c] === 2) overlap++;
            }
        }
    });

    rl.on('close', function (line) {
        let re = /#\d+\s@\s(\d+),(\d+):\s(\d+)x(\d+)/g;
        let parsed = re.exec(line);
        let c = parsed[0];
        let r = parsed[1];
        let w = parsed[2];
        let h = parsed[3];

        for (; c<c+w ; c++) {
            for(; r<r+h ; r++) {
                fabric[r][c]++;
                if (fabric[r][c] === 2) overlap++;
            }
        }
    });
        
    return overlap;
}

console.log(countOverlap(testFile));