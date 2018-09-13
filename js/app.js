var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas_dog"),
    antialias: true,
    alpha: true
});

renderer.setClearColor(new THREE.Color(0x4267b2));
renderer.setPixelRatio(window,devicePixelRatio);
//renderer.setSize(window.innerWidth, window.innerHeight);

// Camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 200000);
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


drawDog();
dogStand();
dogJump();
setTimeout(function () {
    dogStopJump();
},2000);


render();

function render() {
    // dog.rotation.y -= 0.01;
    dogRender();
    updateBars();
    requestAnimationFrame(render);
    this.renderer.render(this.scene, this.camera);
}



function loadTexture(url) {
    var texture = new THREE.TextureLoader().load(url);
    return texture;
}

