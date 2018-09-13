var circle1, circle2, circle3, circle4, boneBody;

function drawBone(){
    var texture = THREE.ImageUtils.loadTexture('/webgl_puppy/assets/bone.jpg');

    var bone = new THREE.Group();
    var material = new THREE.MeshBasicMaterial({
        map:texture});
    var materialDarker = new THREE.MeshBasicMaterial({
        map:texture});
     materialDarker.color.set(0xbbbbbb);

    var ball = new THREE.SphereGeometry(50,25, 25);

    // left side
    circle1 = new THREE.Mesh(ball, materialDarker);
    circle1.position.set(-3.5, 0.5, 1.5);
    circle1.scale.set(0.03,0.03,0.03);
    bone.add(circle1);
    changes.circle1 = {};

    circle2 = new THREE.Mesh(ball, materialDarker);
    circle2.position.set(-3.5, 0.5, -1.5);
    circle2.scale.set(0.03,0.03,0.03);
    bone.add(circle2);
    changes.circle2 = {};

    // right side
    circle3 = new THREE.Mesh(ball, materialDarker);
    circle3.position.set(3.5, 0.5, 1.5);
    circle3.scale.set(0.030,0.030,0.030);
    bone.add(circle3);
    changes.circle3 = {};

    circle4 = new THREE.Mesh(ball, materialDarker);
    circle4.position.set(3.5, 0.5, -1.5);
    circle4.scale.set(0.030,0.030,0.030);
    bone.add(circle4);
    changes.circle4 = {};

    // body
    boneBody = new THREE.Mesh(ball, materialDarker);
    boneBody.position.set(0, 0, 0);
    boneBody.scale.set(0.1,0.02,0.02);
    bone.add(boneBody);
    //
    bone.position.set(50, -24, 0);
    scene.add(bone);
    return bone;
}