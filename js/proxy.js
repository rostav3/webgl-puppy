//var url = 'http://169.254.242.174:5000/';
var url = 'http://192.168.43.29:3000/';

function updateBarsFromServer() {

    $.get(url + 'expression',function (data) {
        expressionPercent = data.val;
    });
    $.get(url + 'speech',function (data) {
        speechPercent = data.val;
    });
    $.get(url + 'hands',function (data) {
        handsPercent = data.val;
    });
    setTimeout(updateBarsFromServer, 1000);
}







