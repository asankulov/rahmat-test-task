const rp = require('request-promise');

const SEARCH_SONGS_BY_ARTIST_URI = 'https://api.deezer.com/search?q=artist:';

module.exports = {
  searchForCLI(q) {
    return new Promise((resolve, reject) => {
      rp.get(encodeURI(`${SEARCH_SONGS_BY_ARTIST_URI}"${q}"&order=RATING_DESC&limit=5`), {json: true})
        .then(response => {
          resolve(response)
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  searchForHTTPEndpoint(q) {
    return new Promise((resolve, reject) => {
      rp.get(encodeURI(`${SEARCH_SONGS_BY_ARTIST_URI}"${q}"`), {json: true})
        .then(response => {
          resolve(response)
        })
        .catch(e => {
          reject(e)
        })
    })
  },
};
