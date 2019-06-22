import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

import { DEFAULT_SEARCH } from './constants';
import './styles.css';

const root = document.getElementById('root');
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.SERVER_URI,
});

const client = new ApolloClient({
  cache,
  link,
});

const displayForecat = (data, queryString = DEFAULT_SEARCH) => {
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

const requestError = (error, searchText) => {
  // eslint-disable-next-line
  console.log(searchText + '\n' + error);
};

const GET_FORECAST = gql`
  query GetForecast($city: String!) {
    forecast(city: $city) {
      location {
        city
        country
      }
      weather {
        temperature {
          unit
          degrees
          min
          max
        }
        conditions
      }
    }
  }
`;

const getForecat = (queryString) => {
  client
    .query({
      query: GET_FORECAST,
      variables: {
        city: queryString,
      },
    })
    .then((result) => {
      displayForecat(result.data, queryString);
    })
    .catch(error => requestError(error, queryString));
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
    getForecat(searchField.value);
  });
};

init();

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
