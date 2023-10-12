import React from 'react';

const Genres = ({ genres, onGenreClick }) => {
  
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">All Genres</li>
        {genres.map(genre => (
          <li 
          key={genre._id} 
          className="list-group-item"
          onClick={() => onGenreClick(genre.name)}
          >
          {genre.name}
        </li>
        ))}  
      </ul>
    </>
  )
}

Genres.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default Genres;