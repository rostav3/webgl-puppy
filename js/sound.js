var audio = new Audio('/webgl_puppy/assets/bark.mp3');
var nextBark;

function bark(){
    audio.play();
    nextBark = Math.round(Math.random() * 50000);
    setTimeout(bark ,nextBark);
}