import React, { useState } from 'react';
import Likes from './common/Likes';
import Pagination from './common/Pagination';
import { getMovies } from '../services/fakeMovieService';

const Movies = () => {

  const [data, setData] = useState({
    movies: getMovies(),
    pageSize: 4,
  })

  const count = data.movies.length;

  const handleDelete = (movie) => {
    const movies = data.movies.filter(m => m._id !== movie._id);
    setData({ movies });
  }

  const handleLike = (movie) => {
    const movies = [...data.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    setData({ movies });
  }

  const handlePageChange = (page) => {
    console.log(page)
  }

  const movieData = data.movies.map(movie => 
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Likes 
          liked={movie.liked}
          onClick={() => handleLike(movie)} 
        />
      </td>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movieData}
            </tbody>
          </table>
          <Pagination 
            itemsCount={count} 
            pageSize={data.movies.pageSize} 
            onPageChange={handlePageChange} 
          />
        </>
      }
    </div>
  )
}

export default Movies;