import getForecast from './api';
import { initScene, animate } from './three/images';

import { DEFAULT_SEARCH, WEATHER_CONDITTIONS } from './constants';
import './styles.css';

const root = document.getElementById('root');
const app = document.createElement('main');

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

const init = () => {
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
    <section id="animation-container" class="aspect-container">
      <canvas id="canvas"></canvas>
    </section>
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

init();
initScene();
animate();

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
