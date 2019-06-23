import * as THREE from 'three';

import vert from './shaders/depth.vert';
import frag from './shaders/depth.frag';
// import vert from './shaders/test.vert';
// import frag from './shaders/test.frag';

let camera;
let scene;
let renderer;
let light;

const uniforms = {
  u_time: {
    type: 'f',
    value: 1.0,
  },
  u_resolution: {
    type: 'v2',
    value: new THREE.Vector2(),
  },
  u_mouse: {
    type: 'v2',
    value: new THREE.Vector2(),
  },
};

// const imageSrc = '../static/images/tup.png';
const imageSrc = '../static/images/tup.png';
const depthMapSrc = '../static/images/tup-depth-map.jpg';

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
  const fieldOfView = 100;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearPlane = 0.1;
  const farPlane = 1000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
  );
  // camera.position.z = 5;
  // camera.position.set(0.5, 0.5, 4);

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
  // const geometry = new THREE.PlaneGeometry(5, 5);
  const geometry = new THREE.PlaneBufferGeometry(7, 8);
  const loader = new THREE.TextureLoader();
  const image = loader.load(imageSrc);
  const depthMap = loader.load(depthMapSrc);

  // Load image file into a custom material
  // const material = new THREE.MeshLambertMaterial({
  //   map: loader.load(imageSrc),
  // });
  const material = new THREE.ShaderMaterial({
    uniforms: {
      ...uniforms,
      image: {
        type: 'sampler2D',
        value: image,
      },
      depthMap: {
        type: 'sampler2D',
        value: depthMap,
      },
    },
    vertexShader: vert,
    fragmentShader: frag,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  /**
   * Init Renderer
   */
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    // alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);

  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);

  document.onmousemove = (e) => {
    uniforms.u_mouse.value.x = e.pageX;
    uniforms.u_mouse.value.y = e.pageY;
  };
};

export const animate = () => {
  requestAnimationFrame(animate);
  render();
};
