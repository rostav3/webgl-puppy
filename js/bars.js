var inputBar = document.getElementById("inputBar");
var expressionBar = document.getElementById("expressionBar");
var speechBar = document.getElementById("speechBar");
var handsBar = document.getElementById("handsBar");
var header = document.getElementById("header");

var inputPercent = 50;
var expressionPercent = 50;
var speechPercent = 50;
var handsPercent = 50;
var averagePercent = 50 ;

function updateBars() {
    inputBar.style.width = inputPercent + '%';
    inputBar.innerHTML = inputPercent + '%';

    expressionBar.style.width = expressionPercent + '%';
    expressionBar.innerHTML = expressionPercent + '%';

    speechBar.style.width = speechPercent + '%';
    speechBar.innerHTML = speechPercent + '%';

    handsBar.style.width = handsPercent + '%';
    handsBar.innerHTML = handsPercent + '%';

    changeHeader();
}

function changeHeader(){
    averagePercent = (inputPercent + expressionPercent + speechPercent + handsPercent) / 4;
    if(averagePercent < 30){
        header.textContent = "Your child is stressful. Please pay attention to him.";
    }
    else if(averagePercent > 70){
        header.textContent = "Your child seems to be happy.";
    }
    else{
        header.textContent = "";
    }

}

