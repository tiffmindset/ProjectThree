const hrHand = document.querySelector("#hour");
const minHand = document.querySelector("#minute");
const secHand = document.querySelector("#second");

var date = new Date();

let curHr = date.getHours();
let curMin = date.getMinutes();
let curSec = date.getSeconds();

let hrPosition = (curHr*360/12) + (curMin*(360/60)/12);
let minPosition = (curMin*360/60) + (curSec*(360/60)/60);
let secPosition = (curSec*360/60);

function runClock () {
    
hrPosition = hrPosition + (3/360);
minPosition = minPosition + (6/60);
secPosition = secPosition + 6;

hrHand.style.transform = "rotate("+ hrPosition +"deg)";
minHand.style.transform = "rotate("+ minPosition +"deg)";
secHand.style.transform = "rotate("+ secPosition +"deg)";

}

var interval = setInterval(runClock, 1000);

