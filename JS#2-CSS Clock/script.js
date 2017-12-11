var secondHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

var clockStart = function() {
var now = new Date();
var seconds = now.getSeconds();
var hour = now.getHours();
var mins = now.getMinutes();
var secondsDegree = ((seconds/60)*360)+90  ;
var minsDegree = ((mins/60)*360)+90  ;
var hourDegree = ((hour/60)*360)+90  ;

secondHand.style.transform = `rotate(${secondsDegree}Deg)`;
    
minsHand.style.transform = `rotate(${minsDegree}Deg)`;
    
hourHand.style.transform = `rotate(${hourDegree}Deg)`;

};

setInterval(clockStart, 1000);