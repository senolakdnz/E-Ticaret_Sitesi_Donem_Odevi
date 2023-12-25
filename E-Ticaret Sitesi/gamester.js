$(document).ready(function(){
    $(window).scroll(function(){
        //console.log("çalıştı...");
        var distance1 = $(window).scrollTop();
        //console.log(distance1);
        if(distance>50)
    {
        $(".down").fadeIn();
        $(".up").fadeOut();
    }
    else
    {
        $(".down").fadeOut();
        $(".up").fadeIn();
    }
    })
    $(".down").click(function(){
        $("html").animate({
            scrollTop:315
        })
    })
    $(".up").click(function(){
        $("html").animate({
            scrollTop:0
        })
    })
})

var downn=document.getElementsByClassName("down")[0];
var upp=document.getElementsByClassName("up")[0];

window.addEventListener("scroll" , function(){
    const distance = this.window.scrollY;

    if(distance>50)
    {
        downn.classList.add("lose")
        upp.classList.add("show")
    }
    else
    {
        downn.classList.remove("lose")
        upp.classList.remove("show")
    }
})

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