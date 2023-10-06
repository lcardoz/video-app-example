import React, { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';

const Movies = () => {

  const [data, getData] = useState({
    movies: getMovies(),
  })

  const handleDelete = movie => {
    console.log('deleted movie')
  }

  const movieData = data.movies.map(movie => 
    <tr key={movie.title} style={{borderBottom: '1px solid #a8a8a9'}}>
      <td style={{paddingRight: 200, paddingTop: 20, paddingBottom: 20}}>{movie.title}</td>
      <td style={{paddingRight: 100}}>{movie.genre.name}</td>
      <td style={{paddingRight: 100}}>{movie.numberInStock}</td>
      <td style={{paddingRight: 100}}>{movie.dailyRentalRate}</td>
      <td><button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
  )

  return (
    <>
      <h4 style={{margin: 20}}>
        {data.movies.length === 0 ? 'There are no movies in the database.' : `Showing ${data.movies.length} movies in the database.`}
      </h4>
      <table>
        <thead>
          <tr style={{borderTop: '1px solid #a8a8a9', borderBottom: '2px solid #a8a8a9'}}>
            <th style={{padding: 20}}>Title</th>
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
  )
}

export default Movies;