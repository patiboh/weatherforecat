import * as THREE from 'three';

let camera;
let scene;
let renderer;
let light;

const uniforms = {
  u_time: { type: 'f', value: 1.0 },
  u_resolution: { type: 'v2', value: new THREE.Vector2() },
  u_mouse: { type: 'v2', value: new THREE.Vector2() },
};

const imageSrc = '../static/images/tup.jpg';

function render() {
  uniforms.u_time.value += 0.05;
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
}

// eslint-disable-next-line no-unused-vars
function onWindowResize(event) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
}

export const initScene = () => {
  /**
   * Camera
   */
  const fieldOfView = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearPlane = 0.1;
  const farPlane = 1000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
  );
  camera.position.z = 5;
  // camera.position.set(15, 10, 15);

  /**
   * Scene
   */
  scene = new THREE.Scene();
  // Add a point of white light
  light = new THREE.PointLight(0xffffff, 1, 0);
  // Specify the light's position
  light.position.set(1, 1, 100);
  scene.add(light);

  /**
   * Geometry, Texture & Mesh
   */
  // const geometry = new THREE.PlaneBufferGeometry(2, 2);
  const geometry = new THREE.PlaneGeometry(5, 5);
  const loader = new THREE.TextureLoader();
  // Load image file into a custom material
  const material = new THREE.MeshLambertMaterial({
    map: loader.load(imageSrc),
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  /**
   * Init Renderer
   */
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);

  // document.onmousemove = (e) => {
  //   uniforms.u_mouse.value.x = e.pageX;
  //   uniforms.u_mouse.value.y = e.pageY;
  // };
};

export const animate = () => {
  requestAnimationFrame(animate);
  render();
};
