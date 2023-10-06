import React, { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';

const Movies = () => {

  const [data, getData] = useState({
    movies: getMovies(),
  })

  const handleDelete = movie => {
    console.log('deleted movie')
  }

  return (
    <div>Movies</div>
  )
}

export default Movies;