import * as THREE from 'three';

import getForecast from './api';
import {
  uniforms, geometry, material, light, camera,
} from './three/images';

import { DEFAULT_SEARCH, WEATHER_CONDITTIONS } from './constants';
import './styles.css';

let scene;
const root = document.getElementById('root');
const app = document.createElement('main');

const renderer = new THREE.WebGLRenderer({ antialias: true });

// eslint-disable-nex =t-line no-unused-vars
const onWindowResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
};

const displayForecat = ({ data, queryString = DEFAULT_SEARCH }) => {
  let htmlContent = '';
  if (data) {
    htmlContent = `<article>
        <p>Weather in ${queryString}:</p>
        <pre>${JSON.stringify(data)}</pre>
      </article>`;
  } else {
    htmlContent = '<div class="error-no-data">Sorry, no weather data available</div>';
  }
  const responseContainer = document.querySelector('#response-container');
  responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
};

const animateConditions = (conditions) => {
  switch (conditions) {
    case WEATHER_CONDITTIONS.CLEAR:
      // todo
      break;
    default:
      break;
  }
};

const initForm = () => {
  app.innerHTML = `
    <section class="form-container" id="form">
      <h1>The Weather Forecat</h1>
      <form id="search-form" action="#" class="form">
          <label for="search-city">Choose your city</label>
          <input id="search-city" type="text" name="search-city" placeholder="e.g. Paris" required>
          <button id="submit-btn" type="submit" value="Submit">Submit</button>
      </form>
      <section id="response-container"></section>
    </section>
    <section id="animation-container" class="animation-container"></section>
  `;
  root.appendChild(app);
  const searchForm = document.querySelector('#search-form');
  const searchField = document.querySelector('#search-city');
  const responseContainer = document.querySelector('#response-container');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    responseContainer.innerHTML = '';
    getForecast(searchField.value, displayForecat);
    getForecast(searchField.value, animateConditions);
  });
};

const initScene = () => {
  scene = new THREE.Scene();
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  scene.add(light);
  renderer.setPixelRatio(window.devicePixelRatio);

  const animationContainer = document.querySelector('#animation-container');
  animationContainer.appendChild(renderer.domElement);

  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);

  document.onmousemove = (e) => {
    uniforms.u_mouse.value.x = e.pageX;
    uniforms.u_mouse.value.y = e.pageY;
  };
};

const render = () => {
  uniforms.u_time.value += 0.05;
  renderer.render(scene, camera);
};

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

initForm();
initScene();
animate();

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
