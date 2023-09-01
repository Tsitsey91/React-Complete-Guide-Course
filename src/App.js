import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [moviesLoading, setMoviesLoading] = useState(false)
  const [receivedError, setReceivedError] = useState(null)

  function handleMovieFetching() {
    setMoviesLoading(true)
    fetch('https://swapi.dev/api/filmssss')
      .then(
        response => {
          return response.json()
        })
      .then(data => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            releaseDate: movieData.release_date,
            openingText: movieData.opening_crawl
          }
        })
        setMovies(transformedMovies)
        setMoviesLoading(false)
      })
  }

  const handleMovieFetching2 = useCallback(async () => {
    try {
      setMoviesLoading(true)
      const response = await fetch('https://swapi.dev/api/films/')
      if (!response.ok) {
        throw Error(`Something went wrong...(response status:${response.status})`)
      }
      const data = await response.json()

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      })
      setMovies(transformedMovies)
    } catch (error) {
      setReceivedError(error.message)
    }
    setMoviesLoading(false)
  }, [])

  let content = <p>Found no movies.</p>

  if (!moviesLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (!moviesLoading && receivedError) {
    content = <p>{receivedError}</p>
  }
  if (moviesLoading) {
    content = <p>Loading movies for you ...</p>
  }

  useEffect(() => {
    handleMovieFetching2()
  }, [handleMovieFetching2])

  return (
    <React.Fragment>
      <section>
        <button onClick={handleMovieFetching2}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
