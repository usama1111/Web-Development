function hey(){


var dob = new Date(prompt("enter your date of birth"))
var dobmili = dob.getTime();
var today = new Date();
var todaymilli = today.getTime();


var diff = todaymilli - dobmili;

var accuage = Math.floor(diff/(1000*60*60*24*30*12))
document.write(accuage);


}

hey();


var nam = prompt("enter your name")


switch(nam)
{

case "usama":
    alert("hello usama")
    break;


case "ali":
    console.log("hello ali")
    break;
}
