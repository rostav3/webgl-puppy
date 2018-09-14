var canvasElement = document.getElementById("canvas_dog");

var renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
    alpha: true
});

renderer.setClearColor(new THREE.Color(0x4267b2),0);
renderer.setPixelRatio(canvasElement.clientWidth/canvasElement.clientHeight);
renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);

// Camera
var camera = new THREE.PerspectiveCamera(45, canvasElement.clientWidth/canvasElement.clientHeight, 0.1, 200000);
camera.position.set(0,5,100);

// SCENE
var scene = new THREE.Scene();

// LIGHTS
hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 50, 0 );
scene.add( hemiLight );
dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.color.setHSL( 0.1, 1, 0.95 );
dirLight.position.set( -1, 1.75, 1 );
dirLight.position.multiplyScalar( 30 );
scene.add( dirLight );
dirLight.castShadow = true;

addFloor();
drawDog();
render();
updateBars();


function render() {
    dogRender();
    updateBars();
    moveBones();
    requestAnimationFrame(render);
    this.renderer.render(this.scene, this.camera);
}

function loadTexture(url) {
    var texture = new THREE.TextureLoader().load(url);
    return texture;
}

var startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

$( document ).on( "keydown", function( event ) {
    switch( event.keyCode ) {
        case $.ui.keyCode.SPACE:
        case $.ui.keyCode.ENTER:
            dogJump();
            break;
        case $.ui.keyCode.UP:
            walkTop();
            break;
        case $.ui.keyCode.DOWN:
            walkDown();
            break;
    }

});

$( document ).on( "keyup", function( event ) {
    switch( event.keyCode ) {
        case $.ui.keyCode.UP:
            stopWalk();
            break;
        case $.ui.keyCode.DOWN:
            stopWalk();
            break;
    }

});