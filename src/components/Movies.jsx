import React, { useState } from 'react';
import Likes from './common/Likes';
import Pagination from './common/Pagination';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';

const Movies = () => {

  const [data, setData] = useState({
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  })

  const {movies, currentPage, pageSize} = data;
  const count = movies.length;

  const handleDelete = (movie) => {
    const movies = movies.filter(m => m._id !== movie._id);
    setData({ movies });
  }

  const handleLike = (movie) => {
    const movies = [...movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    setData({ movies });
  }

  const handlePageChange = page => {
    setData({...data, currentPage: page })
  }

  const paginatedMovies = paginate(movies, currentPage, pageSize);

  return (
    <div style={{marginTop: 20, marginBottom: 20}}>
      {count === 0 ? 
        <p>There are no movies in the database. </p>
      : 
        <>
          <p>Showing {count} movies in the database.</p>
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
              {paginatedMovies.map(movie => 
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
              )}
            </tbody>
          </table>
          <Pagination 
            itemsCount={count} 
            pageSize={pageSize} 
            currentPage={currentPage}
            onPageChange={handlePageChange} 
          />
        </>
      }
    </div>
  )
}

export default Movies;