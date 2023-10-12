import React, { useState } from 'react';
import { getGenres } from '../../services/fakeGenreService';

const Genres = () => {

  const [genreData, setGenreData] = useState({
    genres: getGenres(),
  })

  const {genres} = genreData;

  return (
    <>
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>
    </ul>
    {genres.map(genre => (
    <ul className="list-group">
      <li 
        key={genre._id} 
        className="list-group-item"
        // onClick={handleGenreClick}
      >
        {genre.name}
      </li>
    </ul>
    ))}  
    </>
  )
}

export default Genres;