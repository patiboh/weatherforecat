import { WEATHER_API_URL, DEFAULT_SEARCH } from './constants';

import './styles.css';

const root = document.getElementById('root');
let searchedForText = DEFAULT_SEARCH;

const displayForecat = (data) => {
  let htmlContent = '';
  if (data) {
    htmlContent = `<article>
        <p>Weather in ${searchedForText}:</p>
        <pre>${JSON.stringify(data)}</pre>
      </article>`;
  } else {
    htmlContent = '<div class="error-no-data">Sorry, no weather data available</div>';
  }
  const responseContainer = document.querySelector('#response-container');
  responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
};

const requestError = (error, requestCategory) => {
  // eslint-disable-next-line
  console.log(requestCategory + '\n' + error);
};

const init = () => {
  root.innerHTML = `
  <div class="main">
    <h1>The Weather Forecat</h1>
    <form id="search-form" action="#" class="form">
        <label for="search-city">Choose your city</label>
        <input id="search-city" type="text" name="search-city" placeholder="e.g. Paris" required>
        <button id="submit-btn" type="submit" value="Submit">Submit</button>
    </form>
    <div id="response-container" class="container"></div>
  </div>`;

  const searchForm = document.querySelector('#search-form');
  const searchField = document.querySelector('#search-city');
  const responseContainer = document.querySelector('#response-container');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
  });
};

init();

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
