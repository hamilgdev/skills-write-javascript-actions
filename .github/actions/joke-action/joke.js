const request = require('request-promise');

const options = {
  method: 'GET',
  uri: 'https://icanhazdadjoke.com/',
  headers: {
    Accept: 'application/json',
    'User-Agent': 'Writing JavaScript action GitHub Skills course',
  },
  json: true,
};

async function getJoke() {
  const response = await request(options);
  return response.joke;
}

module.exports = getJoke;
