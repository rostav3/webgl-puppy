var bone;
var texture;
var circle1, circle2, circle3, circle4, boneBody;

function drawBone(){
    texture = THREE.ImageUtils.loadTexture('/webgl_puppy/assets/bone.jpg');

    bone = new THREE.Group();
    var material = new THREE.MeshBasicMaterial({
        map:texture});
    var materialDarker = new THREE.MeshBasicMaterial({
        map:texture});
    materialDarker.color.set(0xbbbbbb);

    var ball = new THREE.SphereGeometry(50,25, 25);

    // left side
    circle1 = new THREE.Mesh(ball, material);
    circle1.position.set(-7, 0.5, 5);
    circle1.scale.set(0.020,0.020,0.020);
    bone.add(circle1);
    changes.circle1 = {};

    circle2 = new THREE.Mesh(ball, material);
    circle2.position.set(-7, -0.5, 5);
    circle2.scale.set(0.020,0.020,0.020);
    bone.add(circle2);
    changes.circle2 = {};

    // right side
    circle3 = new THREE.Mesh(ball, material);
    circle3.position.set(1.7, 0.5, 5);
    circle3.scale.set(0.020,0.020,0.020);
    bone.add(circle3);
    changes.circle3 = {};

    circle4 = new THREE.Mesh(ball, material);
    circle4.position.set(7.2, -0.5, -5);
    circle4.scale.set(0.020,0.020,0.020);
    bone.add(circle4);
    changes.circle4 = {};

    // body
    boneBody = new THREE.Mesh(ball, materialDarker);
    boneBody.position.set(0, 0, 0);
    boneBody.scale.set(0.1,0.02,0.05);
    bone.add(boneBody);
    changes.boneBody = {};

    bone.position.set(50, 4, 7);
    scene.add(bone);
    changes.bone = {};
}