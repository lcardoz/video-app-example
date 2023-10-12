import React, { useState, useEffect } from 'react';
import MoviesTable from './MoviesTable';
import Pagination from './common/Pagination';
import Genres from './common/Genres';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';

const Movies = () => {

  
  const [data, setData] = useState({
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    pageSize: 4,
    selectedGenre: 'All Genres',
  })
  
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies(); // Fetch movies from an API or service
      setData({ ...data, movies: moviesData });
    };

    fetchMovies();
  }, []);

  const {movies, genres, currentPage, pageSize, selectedGenre } = data;
  const count = movies.length;

  const handleDelete = (movie) => {
    const updatedMovies = movies.filter(m => m._id !== movie._id);
    setData({ ...data, movies: updatedMovies });
  }

  const handleLike = (movie) => {
    const updatedMovies = [...movies];
    const index = updatedMovies.findIndex(m => m._id === movie._id);
    updatedMovies[index] = { ...updatedMovies[index] };
    updatedMovies[index].liked = !updatedMovies[index].liked;
    setData({ ...data, movies: updatedMovies });
  }

  const handlePageChange = page => {
    setData({...data, currentPage: page })
  }

  const handleGenreSelect = genre => {
    setData({...data, selectedGenre: genre, currentPage: 1})
  }

  const handleAllGenres = () => {
    setData({...data, selectedGenre: 'All Genres', currentPage: 1})
  }

  const filteredMovies = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies

  const paginatedMovies = paginate(filteredMovies, currentPage, pageSize);

  return (
    <div style={{marginTop: 20, marginBottom: 20}}>
      {count === 0 ? 
        <p>There are no movies in the database. </p>
      : 
        <div className="row">
          <div className="col-3">
            <Genres 
              genres={genres} 
              selectedGenre={selectedGenre}
              handleAllGenres={handleAllGenres}
              onGenreSelect={handleGenreSelect}
            />
          </div>
          <div className="col">
            <p>Showing {filteredMovies.length} movies in the database.</p>
            <MoviesTable movies={paginatedMovies} onDelete={handleDelete} onLike={handleLike} />
            <Pagination 
              itemsCount={filteredMovies.length} 
              pageSize={pageSize} 
              currentPage={currentPage}
              onPageChange={handlePageChange} 
            />
          </div>
        </div>
      }
    </div>
  )
}

export default Movies;