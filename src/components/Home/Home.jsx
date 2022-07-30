import { useEffect, useState } from "react";
import * as apiCalls from '../../services/movieServices.js'

const Home = (props) => {
  const [popularMovies, setPopularMovies] = useState()

  useEffect(() => {
    apiCalls.getPopularMovies()
    .then(popularMovieData => setPopularMovies(popularMovieData))
  }, [])

  return ( 
    <>
      <h1>welcome home</h1>
      <ul>
        {popularMovies?.results.map(result => 
          <li key={result.id}>{result.title}</li>
        )}
      </ul>
    </>
  );
}

export default Home;