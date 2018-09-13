var speedBar = document.getElementById("speedBar");
var inputBar = document.getElementById("inputBar");
var happinessBar = document.getElementById("happinessBar");

var speedPercent = 50;
var inputPercent = 50;
var happinessPercent = 50;

function updateBars() {
    happinessBar.style.width = happinessPercent + '%';
    happinessBar.innerHTML = happinessPercent + '%';

    speedBar.style.width = speedPercent + '%';
    speedBar.innerHTML = speedPercent + '%';

    inputBar.style.width = inputPercent + '%';
    inputBar.innerHTML = inputPercent + '%';
}
