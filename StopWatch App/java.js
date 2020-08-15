var min = 0;
var sec = 0;
var msec = 0;



var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var msecheading = document.getElementById("msec")

var interval;


function timer(){


msec++

msecheading.innerHTML = msec;

if(msec >= 100)
{

    sec++
secheading.innerHTML = sec
msec = 0

}
else if(sec >= 5){

min++

sec = 0
minheading.innerHTML = min


console.log(min)



}


}



function start(){
interval = setInterval(timer,10)
document.getElementById("disable").disabled = true;

}




function stop(){

clearInterval(interval)
document.getElementById("disable").disabled = false;


}

function reset(){

min = 0;
sec = 0;
msec = 0;

msecheading.innerHTML = msec
secheading.innerHTML = sec
minheading.innerHTML =  min

stop();
}

