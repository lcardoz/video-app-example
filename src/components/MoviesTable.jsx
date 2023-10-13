import React from 'react';
import TableHeader from './common/TableHeader';
import Likes from './common/Likes';

const MoviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }) => {

  const columns = [
    {path: 'title', label: "Title"},
    {path: 'genre.name', label: "Genre"},
    {path: 'numberInStock', label: "Stock"},
    {path: 'dailyRentalRate', label: "Rate"},
    {key: 'like'},
    {key: 'delete'},
  ]

  return (
    <>
      <table className='table'> 
        <TableHeader 
          columns={columns} 
          sortColumn={sortColumn} 
          onSort={onSort} 
        />
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