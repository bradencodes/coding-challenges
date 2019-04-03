function formatDuration (seconds) {
    if (seconds === 0) return "now";
    
    let timeArr = [];
    
    let y = Math.floor( seconds / (60*60*24*365) );
    seconds -= y * (60*60*24*365);
    if (y) timeArr.push(y === 1 ? `1 year` : `${y} years`);
    
    let d = Math.floor( seconds / (60*60*24) );
    seconds -= d * (60*60*24);
    if (d) timeArr.push(d === 1 ? `1 day` : `${d} days`);
    
    let h = Math.floor( seconds / (60*60) );
    seconds -= h * (60*60);
    if (h) timeArr.push(h === 1 ? `1 hour` : `${h} hours`);
    
    let m = Math.floor( seconds / 60 );
    seconds -= m * 60;
    if (m) timeArr.push(m === 1 ? `1 minute` : `${m} minutes`);
    
    let s = seconds;
    if (s) timeArr.push(s === 1 ? `1 second` : `${s} seconds`);
    
    return timeArr.join(', ').replace(/,([^,]*)$/, " and$1");
}