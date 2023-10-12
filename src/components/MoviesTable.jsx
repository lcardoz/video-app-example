import React from 'react';
import Likes from './common/Likes';

const MoviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }) => {

  const raiseSort = path => {
    const sortColumnCopy = {...sortColumn}
    if (sortColumnCopy.path === path)
      sortColumnCopy.order = sortColumnCopy.order === "asc" ? "desc" : "asc";
    else {
      sortColumnCopy.path = path;
      sortColumnCopy.order = "asc";
    }
    onSort(sortColumnCopy);
  } 


  return (
    <>
      <table className='table'> 
        <thead>
          <tr>
            <th onClick={() => raiseSort('title')}>Title</th>
            <th onClick={() => raiseSort('genre.name')}>Genre</th>
            <th onClick={() => raiseSort('numberInStock')}>Stock</th>
            <th onClick={() => raiseSort('dailyRentalRate')}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => 
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Likes 
                  liked={movie.liked}
                  onClick={() => onLike(movie)} 
                />
              </td>
              <td>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default MoviesTable;