var inputBar = document.getElementById("inputBar");
var expressionBar = document.getElementById("expressionBar");
var speechBar = document.getElementById("speechBar");
var handsBar = document.getElementById("handsBar");

var inputPercent = 50;
var expressionPercent = 50;
var speechPercent = 50;
var handsPercent = 50;

function addCircleBar(){
    $('#circleBar').circleProgress({
        value: 0.75,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
    });
}

function updateBars() {
    inputBar.style.width = inputPercent + '%';
    inputBar.innerHTML = inputPercent + '%';

    expressionBar.style.width = expressionPercent + '%';
    expressionBar.innerHTML = expressionPercent + '%';

    speechBar.style.width = speechPercent + '%';
    speechBar.innerHTML = speechPercent + '%';

    handsBar.style.width = handsPercent + '%';
    handsBar.innerHTML = handsPercent + '%';
}
