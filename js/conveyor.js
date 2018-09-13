var bones = [];
function startConveyor(){

    drawBoneOnConveyor();
}

function drawBoneOnConveyor() {
    bones.push(drawBone());
    var nextBone = Math.round(Math.random() * 10000);
    setTimeout(drawBoneOnConveyor,nextBone);

}

function moveBones() {
    for (let i=0; i<bones.length; i++) {
        bones[i].position.x -= 1;
        if(isJump){
            if(bones[i].position.x >= -5 && bones[i].position.x <= 10){
                inputPercent ++;
            }
            else if(bones[i].position.x > 10 && bones[i].position.x <= 20){
                inputPercent --;
            }
        }
        else{
            if(bones[i].position.x <= X_POSITION && bones[i].position.x >= -5){
                inputPercent --;
            }
        }
    }
}