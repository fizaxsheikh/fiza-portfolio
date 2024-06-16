// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create floating letters
const loader = new THREE.FontLoader();
loader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function(font) {
    const geometry = new THREE.TextGeometry('fiza sheikh', {
        font: font,
        size: 80,
        height: 20,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 5,
        bevelSize: 2,
        bevelSegments: 5
    });
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(geometry, material);
    // Centering the text horizontally
    geometry.computeBoundingBox();
    const textWidth = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
    textMesh.position.x = -textWidth / 2;
    // Positioning the text vertically
    textMesh.position.y = -50; // Adjust as needed
    textMesh.position.z = -300;
    scene.add(textMesh);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Bobbing animation
        textMesh.position.y = Math.sin(Date.now() * 0.001) * 10;

        renderer.render(scene, camera);
    }
    animate();
});

camera.position.z = 500;
