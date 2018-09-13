var bones = [];
var checkedBones = [];
function startConveyor(){

    drawBoneOnConveyor();
}

function drawBoneOnConveyor() {
    var randZ = Math.round(Math.random() * 30) -20;
    bones.push(drawBone(randZ));
    checkedBones.push(false);
    var nextBone = Math.round(Math.random() * 1000) + 1000;
    setTimeout(drawBoneOnConveyor,nextBone);

}

function moveBones() {
    for (let i=0; i<bones.length; i++) {
        if (bones[i]){
            bones[i].position.x -= 1;
            if(isJump){
                if((bones[i].position.x >= -5 && bones[i].position.x <= 10) && (!checkedBones[i])){
                    inputPercent ++;
                    checkedBones[i] = true;
                }
            }
            else{
                if(bones[i].position.x <= X_POSITION && bones[i].position.x >= -5){
                    inputPercent --;
                    scene.remove(bones[i]);
                    bones[i] = null;
                }
            }
        }

    }
}
