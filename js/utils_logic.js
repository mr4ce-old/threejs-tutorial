/* Statistics */

function initStats() {
    var stats = new Stats();

    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    $('#Stats-output').append(stats.domElement);

    return stats;
}

/* Statistics */


/* dat.GUI */

var controls = new function () {
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
};

var gui = new dat.GUI();

gui.add(controls, 'rotationSpeed', 0, 0.5);
gui.add(controls, 'bouncingSpeed', 0, 0.5);

/* dat.GUI */