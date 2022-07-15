const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

function getPopularMovies() {
  return fetch(`${BASE_URL}/api/movies/popular`)
  .then(res => res.json())
}

export {
  getPopularMovies,

}