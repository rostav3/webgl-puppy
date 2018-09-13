var url = 'http://169.254.242.174:5000/';

function updateBars() {
    expressionPercent = getJson('expression');
    speechPercent = getJson('speech');
    handsPercent =  getJson('hands');
    setTimeout(updateBars, 1000);
}


function getJson(dataName){
    $.ajax({
        url: url + dataName,
        data: data,
        success: success
    });
    return data;
}



