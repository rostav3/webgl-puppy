var inputBar = document.getElementById("inputBar");
var expressionBar = document.getElementById("expressionBar");
var speechBar = document.getElementById("speechBar");
var handsBar = document.getElementById("handsBar");
var circleBar = document.getElementById("circleBar");

var inputPercent = 50;
var expressionPercent = 50;
var speechPercent = 50;
var handsPercent = 50;

function addCircleBar(){
    var bar = new ProgressBar.Circle(circleBar, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.path.textContent = '';
            } else {
                circle.path.textContent = value;
            }

        }
    });
    bar.path.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.path.style.fontSize = '2rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0
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
