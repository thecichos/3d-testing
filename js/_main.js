var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var lastMousePos = {}


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth - 10, window.innerHeight - 10);
document.body.appendChild(renderer.domElement);

for (var i = 0; i < 20; i++) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.z = Math.floor(Math.random() * 50)
    cube.position.y = Math.floor(Math.random() * 50)
    cube.position.x = Math.floor(Math.random() * 50)
    scene.add(cube);
}

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.y = 5;

var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

document.addEventListener("keydown", function(evt) {
    if (evt.key == "ArrowUp") {
        camera.position.y += 0.5
    }
    if (evt.key == "ArrowDown") {
        camera.position.y -= 0.5
    }
    if (evt.key == "ArrowLeft") {
        camera.position.x -= 0.5
    }
    if (evt.key == "ArrowRight") {
        camera.position.x += 0.5
    }
})

document.addEventListener("wheel", function(evt) {
    if (evt.deltaY == 100) {
        camera.position.z += 0.5
    }
    if (evt.deltaY == -100) {
        camera.position.z -= 0.5
    }
})

document.addEventListener("mousemove", function(evt) {

    if (evt.clientX < lastMousePos.x) {
        camera.rotation.y -= 0.01
    }
    if (evt.clientX > lastMousePos.x) {
        camera.rotation.y += 0.01
    }

    lastMousePos.x = evt.clientX
    lastMousePos.y = evt.clientY
})


render();
