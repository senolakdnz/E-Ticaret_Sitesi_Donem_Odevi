window.onload=function getTime(){
    var time = new Date()
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    hour=hour<10? "0"+hour:hour;
    minute=minute<10? "0"+minute:minute;
    second=second<10? "0"+second:second;

    document.getElementById("hour").innerText=hour+": "
    document.getElementById("minute").innerText=minute+": "
    document.getElementById("second").innerText=second;

    var inter = setInterval(getTime,1000);
}