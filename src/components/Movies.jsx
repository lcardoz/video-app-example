import React, { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';

const Movies = () => {

  const [data, setData] = useState({
    movies: getMovies(),
  })

  const handleDelete = (movie) => {
    const movies = data.movies.filter(m => m._id !== movie._id)
    setData({movies})
  }

  const movieData = data.movies.map(movie => 
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(movie)}
        >
          Delete
        </button>
      </td>
    </tr>
  )

  return (
    <div style={{marginTop: 20, marginBottom: 20}}>
      {data.movies.length === 0 ? 
        <p>There are no movies in the database. </p>
      : 
        <>
          <p>Showing {data.movies.length} movies in the database.</p>
          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movieData}
            </tbody>
          </table>
        </>
      }
    </div>
  )
}

export default Movies;