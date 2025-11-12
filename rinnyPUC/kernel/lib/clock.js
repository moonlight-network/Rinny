//This is the system clock. Stupid, right?
function genTime(){
    const weeks = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var time=new date();
    var month = months[time.getMonth()];
    var dotw = weeks[time.getDay()];
    var date = time.getDate();
    var hour = time.getHour();
    var minute = time.getMinute();
    if(hour > 12){
        var hr12 = hour - 12
    } else {
        var hr12 = hour
    }
}
setInterval(genTime, 1000);