import React from 'react';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';
import Likes from './common/Likes';

const MoviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }) => {

  const columns = [
    {path: 'title', label: "Title"},
    {path: 'genre.name', label: "Genre"},
    {path: 'numberInStock', label: "Stock"},
    {path: 'dailyRentalRate', label: "Rate"},
    {key: 'like', content: movie => (
      <Likes liked={movie.liked} onClick={() => onLike(movie)} />
    )},
    {key: 'delete', content: movie => (
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie)}>Delete</button>
    )},
  ]

  return (
    <>
      <table className='table'> 
        <TableHeader 
          columns={columns} 
          sortColumn={sortColumn} 
          onSort={onSort} 
        />
        <TableBody 
          data={movies} 
          columns={columns} 
        />
      </table>
    </>
  )
}

export default MoviesTable;