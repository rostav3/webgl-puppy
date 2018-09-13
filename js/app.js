var canvasElement = document.getElementById("canvas_dog");

var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas_dog"),
    antialias: true,
    alpha: true
});

renderer.setClearColor(new THREE.Color(0x4267b2));
// pixelRatio =
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

function addFloor(){
    var floor = new THREE.Group();
    var textureFloor = THREE.ImageUtils.loadTexture('/webgl_puppy/assets/floor.png');
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


function render() {
    dogRender();
    updateBars();
    requestAnimationFrame(render);
    this.renderer.render(this.scene, this.camera);
}



function loadTexture(url) {
    var texture = new THREE.TextureLoader().load(url);
    return texture;
}

var startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

