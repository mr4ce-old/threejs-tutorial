var CubeLogic = function (scene, planeGeometry) {
    this.scene = scene;
    this.planeGeometry = planeGeometry;
};

CubeLogic.prototype.addCube = function () {
    var cubeSize = Math.ceil(Math.random() * 3);
    var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.castShadow = true;
    cube.name = "cube-" + this.scene.children.length;
    cube.position.x = -30 + Math.round((Math.random() * this.planeGeometry.width));
    cube.position.y = Math.round((Math.random() * 5));
    cube.position.z = -20 + Math.round((Math.random() * this.planeGeometry.height));

    this.scene.add(cube);
};