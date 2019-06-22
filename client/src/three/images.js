import * as THREE from 'three';

export const geometry = new THREE.PlaneGeometry(10, 10 * 0.75);

export const uniforms = {
  u_time: { type: 'f', value: 1.0 },
  u_resolution: { type: 'v2', value: new THREE.Vector2() },
  u_mouse: { type: 'v2', value: new THREE.Vector2() },
};

// Load an image file into a custom material
const loader = new THREE.TextureLoader();
const imagesMaterial = () => new THREE.MeshLambertMaterial({
  map: loader.load('./static/images/tup.jpg'),
});

const imagesCamera = () => {
  // Specify the portion of the scene visiable at any time (in degrees)
  const fieldOfView = 75;

  // Specify the camera's aspect ratio
  const aspectRatio = window.innerWidth / window.innerHeight;

  // Specify the near and far clipping planes. Only objects
  // between those planes will be rendered in the scene
  // (these values help control the number of items rendered
  // at any given time)
  const nearPlane = 0.1;
  const farPlane = 1000;

  const cam = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
  );
  // Finally, set the camera's position in the z-dimension
  cam.position.z = 5;
  return cam;
};

// Add a point light with #fff color, .7 intensity, and 0 distance
const pointLight = () => {
  const light = new THREE.PointLight(0xffffff, 1, 0);
  // Specify the light's position
  light.position.set(1, 1, 100);
  return light;
};

export const material = imagesMaterial();
export const camera = imagesCamera();
export const light = pointLight();
