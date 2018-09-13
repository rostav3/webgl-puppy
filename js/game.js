function startGame() {
    startButton.parentNode.removeChild(startButton);
    startConveyor();
    // drawBone();
// dogStand();
// dogJump();
// setTimeout(function () {
//     dogStopJump();
// },2000);
    turnRight();
}

var textureFloor;

function addFloor(){
    var floor = new THREE.Group();
    textureFloor = THREE.ImageUtils.loadTexture('/webgl_puppy/assets/floor.jpg');
    var materialFloor = new THREE.MeshBasicMaterial({
        map:textureFloor});
    materialFloor.color.set(0xffffff);

    var rectangle = new THREE.CubeGeometry(300,0,100,0);

// left side
    floor = new THREE.Mesh(rectangle, materialFloor);
    floor.position.set(0, -30, 0);
    floor.scale.set(0.5,0.5,0.5);
    floor.add(rectangle);
    changes.floor = {};
    scene.add(floor);
}



