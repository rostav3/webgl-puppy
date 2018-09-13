var dog;
var texture;
var eyesColor = "";
var leg1, leg2, leg3, leg4, bodyDog, tail;

var dogJumpPosition = 0;

var changes = {};

var rotateLegs = 0;
var url = new URL(window.location.href);
var dogNum = url.searchParams.get("num");

if (dogNum === '1'){
    texture = THREE.ImageUtils.loadTexture('/facebookHackaton/assets/fur.jpg');
    eyesColor =  0xbbbbbb;
}else{
    texture = THREE.ImageUtils.loadTexture('/facebookHackaton/assets/fur2.jpeg');
    eyesColor =  0xffffff;

}

function drawDog(){
    // Dog
    dog = new THREE.Group();
    var materialFur = new THREE.MeshBasicMaterial({
        map:texture});
    var materialDarkerFur = new THREE.MeshBasicMaterial({
        map:texture});
    materialDarkerFur.color.set(0xbbbbbb);

    var materialWhite = new THREE.MeshLambertMaterial({
        color:eyesColor});

    var ball = new THREE.SphereGeometry(100,50, 50);

    // left side
    leg1 = new THREE.Mesh(ball, materialDarkerFur);
    leg1.position.set(-3, 0, 5);
    leg1.scale.set(0.015,0.03,0.015);
    dog.add(leg1);
    changes.leg1 = {};

    leg3 = new THREE.Mesh(ball, materialDarkerFur);
    leg3.position.set(-3, 0, -5);
    leg3.scale.set(0.015,0.03,0.015);
    dog.add(leg3);
    changes.leg3 = {};

    // right side
    leg2 = new THREE.Mesh(ball, materialDarkerFur);
    leg2.position.set(3, 0, 5);
    leg2.scale.set(0.015,0.03,0.015);
    dog.add(leg2);
    changes.leg2 = {};

    leg4 = new THREE.Mesh(ball, materialDarkerFur);
    leg4.position.set(3, 0, -5);
    leg4.scale.set(0.015,0.03,0.015);
    dog.add(leg4);
    changes.leg4 = {};

    // body
    bodyDog = new THREE.Mesh(ball, materialFur);
    bodyDog.position.set(0, 4, 0);
    bodyDog.scale.set(0.05,0.05,0.1);
    dog.add(bodyDog);
    changes.bodyDog = {};

    // tail
    tail = new THREE.Mesh(ball, materialDarkerFur);
    tail.position.set(0, 3, -10);
    tail.scale.set(0.015,0.03,0.015);
    tail.rotation.x = 3.14/4;
    dog.add(tail);
    changes.tail = {};

    // neck
    var neck = new THREE.Mesh(ball, materialFur);
    neck.position.set(0, 9, 5);
    neck.scale.set(0.02,0.05,0.02);
    dog.add(neck);
    changes.neck = {};

    // head
    var head = new THREE.Mesh(ball, materialFur);
    head.position.set(0, 14, 5);
    head.scale.set(0.05,0.05,0.05);
    dog.add(head);
    changes.head = {};

    // Hears
    var hear1 = new THREE.Mesh(ball, materialDarkerFur);
    hear1.position.set(3.8, 14, 6);
    hear1.scale.set(0.022,0.03,0.015);
    dog.add(hear1);

    var hear2 = new THREE.Mesh(ball, materialDarkerFur);
    hear2.position.set(-3.8, 14, 6);
    hear2.scale.set(0.022,0.03,0.015);
    dog.add(hear2);

    // eyes
    var hear1 = new THREE.Mesh(ball, materialWhite);
    hear1.position.set(1.2, 14.5, 8);
    hear1.scale.set(0.02,0.02,0.02);
    dog.add(hear1);

    var hear2 = new THREE.Mesh(ball, materialWhite);
    hear2.position.set(-1.2, 14.5, 8);
    hear2.scale.set(0.02,0.02,0.02);
    dog.add(hear2);
    scene.add(dog);

    changes.dog = {};

}
function dogStand() {
    changes.bodyDog.rotationX = -1;
    changes.leg1.positionY = changes.leg2.positionY = 4;
    changes.leg4.positionZ = changes.leg3.positionZ = 2;
    changes.tail.positionY = -3;
    changes.tail.positionZ = -6;
}

function dogJump() {
    dogJumpPosition = .1;
    changes.dog.positionY = 10;
}

function dogRender() {
    if ((changes.bodyDog.rotationX != null) && (changes.bodyDog.rotationX !== bodyDog.rotation.x)) {
        var valToAdd = (changes.bodyDog.rotationX > bodyDog.rotation.x) ? 0.1 : -0.1;
        bodyDog.rotation.x += valToAdd;
        if (((bodyDog.rotation.x + valToAdd > changes.bodyDog.rotationX) && (bodyDog.rotation.x < changes.bodyDog.rotationX)) ||
            ((bodyDog.rotation.x + valToAdd < changes.bodyDog.rotationX) && (bodyDog.rotation.x > changes.bodyDog.rotationX))) {
            bodyDog.rotation.x = changes.bodyDog.rotationX;
        }
    }

    if ((changes.leg1.positionY != null) && (changes.leg1.positionY !== leg1.position.y)){
        leg1.position.y += (changes.leg1.positionY > leg1.position.y) ? 1 : -1;
    }

    if ((changes.leg2.positionY != null) && (changes.leg2.positionY !== leg2.position.y)){
        leg2.position.y += (changes.leg2.positionY > leg2.position.y) ? 1 : -1;
    }
    if ((changes.tail.positionY != null) && (changes.tail.positionY !== tail.position.y)){
        tail.position.y += (changes.tail.positionY > tail.position.y) ? 1 : -1;
    }
    if ((changes.leg4.positionZ != null) && (changes.leg4.positionZ !== leg4.position.z)){
        leg4.position.z += (changes.leg4.positionZ > leg4.position.z) ?  1 : -1;
    }

    if ((changes.leg3.positionZ != null) && (changes.leg3.positionZ !== leg3.position.z)){
        leg3.position.z += (changes.leg3.positionZ > leg3.position.z) ? 1 : -1;
    }
    if ((changes.tail.positionZ != null) && (changes.tail.positionZ !== tail.position.z)){
        tail.position.z += (changes.tail.positionZ > tail.position.z) ? 1 : -1;
    }

    if (changes.dog.positionY !==  dog.position.y){
        if (((dog.position.y + dogJumpPosition > changes.dog.positionY) && (dog.position.y < changes.dog.positionY)) ||
            ((dog.position.y + dogJumpPosition < changes.dog.positionY) && (dog.position.y > changes.dog.positionY))) {
            dog.position.y = changes.dog.positionY;
        }else{
            dog.position.y += dogJumpPosition;
            dogJumpPosition += dogJumpPosition/4;
        }
    }else if (dogJumpPosition !== 0){
        changes.dog.positionY = -changes.dog.positionY;
        dogJumpPosition = (dogJumpPosition >0) ? -0.1: 0.1;
        dog.position.y += dogJumpPosition;
    }
}