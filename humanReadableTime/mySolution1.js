function formatDuration (seconds) {
    if (seconds === 0) return "now"; //Edge Case

    let time = {seconds};

    //If seconds is larger than 59, convert to minutes
    if (time.seconds >= 60){
        time.minutes = Math.floor(time.seconds / 60);
        time.seconds = time.seconds % 60;
    }

    //If minutes is larger than 59, convert to hours
    if (time.minutes >= 60){
        time.hours = Math.floor(time.minutes / 60);
        time.minutes = time.minutes % 60;
    }

    //If hours is larger than 23, convert to days
    if (time.hours >= 24){
        time.days = Math.floor(time.hours / 24);
        time.hours = time.hours % 24;
    }

    //If days is longer than 364, convert to years
    if (time.days >= 365){
        time.years = Math.floor(time.days / 365);
        time.days = time.days % 365;
    }

    let timeArr = [];

    for (let comp in time){
        let amount = time[comp];
        if (amount === 0) continue;
        timeArr.push( amount === 1 ? `${amount} ${comp}`.slice(0, -1) : `${amount} ${comp}` );
    }

    timeArr = timeArr.reverse();

    if (timeArr.length === 1) 
        return timeArr[0];
    else if (timeArr.length === 2) 
        return timeArr[0] + " and " + timeArr[1];
    else {
        let result = "";
        
        for (let i = 0 ; i < timeArr.length ; i++){
            if (i === timeArr.length - 1) result += `and ${timeArr[i]}`;
            else if (i === timeArr.length - 2) result += `${timeArr[i]} `;
            else result += `${timeArr[i]}, `
        }
        
        return result;
    }
}