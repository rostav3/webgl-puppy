function startConveyor(){

    f();
}

function f() {
    drawBone();
    var nextBone = Math.round(Math.random() * 1000);
    setTimeout(f,nextBone);

}

function f1() {
    
}