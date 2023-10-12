import React from 'react';

const Genres = ({ genres, onGenreSelect, selectedGenre, handleAllGenres }) => {
  
  return (
    <>
      <ul className="list-group">
        <li 
          className={"All Genres" === selectedGenre ? "list-group-item active" : "list-group-item"}
          onClick={handleAllGenres}
        >
          All Genres
        </li>
        {genres.map(genre => (
          <li 
          key={genre._id} 
          className={genre === selectedGenre ? "list-group-item active" : "list-group-item"}
          onClick={() => onGenreSelect(genre)}
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