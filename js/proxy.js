//var url = 'http://169.254.242.174:5000/';
var url = 'http://192.168.43.29:3000/';

function updateBars() {
    expressionPercent = getJson('expression');
    speechPercent = getJson('speech');
    handsPercent =  getJson('hands');
    setTimeout(updateBars, 1000);
}


function getJson(dataName){
    $.ajax({
        dataType: "json",
        url: url + dataName,
        data: data,
        success: success
    });
    return data.val;
}



