var bone;
var texture;
var circle1, circle2, circle3, circle4, boneBody;

function drawBone(){
    texture = THREE.ImageUtils.loadTexture('/webgl_puppy/assets/bone.jpg');

    bone = new THREE.Group();
    var materialFur = new THREE.MeshBasicMaterial({
        map:texture});
    var materialDarkerFur = new THREE.MeshBasicMaterial({
        map:texture});
    materialDarkerFur.color.set(0xbbbbbb);

    var ball = new THREE.SphereGeometry(100,50, 50);

    // left side
    circle1 = new THREE.Mesh(ball, materialDarkerFur);
    circle1.position.set(-3, 0, 5);
    circle1.scale.set(0.015,0.03,0.015);
    bone.add(circle1);
    changes.circle1 = {};

    circle2 = new THREE.Mesh(ball, materialDarkerFur);
    circle2.position.set(-3, 0, -5);
    circle2.scale.set(0.015,0.03,0.015);
    bone.add(circle2);
    changes.circle2 = {};

    // right side
    circle3 = new THREE.Mesh(ball, materialDarkerFur);
    circle3.position.set(3, 0, 5);
    circle3.scale.set(0.015,0.03,0.015);
    bone.add(circle3);
    changes.circle3 = {};

    circle4 = new THREE.Mesh(ball, materialDarkerFur);
    circle4.position.set(3, 0, -5);
    circle4.scale.set(0.015,0.03,0.015);
    bone.add(circle4);
    changes.circle4 = {};

    // body
    boneBody = new THREE.Mesh(ball, materialFur);
    boneBody.position.set(0, 4, 0);
    boneBody.scale.set(0.05,0.05,0.1);
    bone.add(boneBody);
    changes.boneBody = {};

    scene.add(bone);
    changes.bone = {};
}