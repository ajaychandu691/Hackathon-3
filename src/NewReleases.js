import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { CircularProgress, Box } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const NewReleases = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.REACT_APP_API_KEY)
      .then(res => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
        <ErrorOutlineIcon color="error" style={{ fontSize: 60 }}/>
        <p>Oops! Something went wrong...</p>
      </Box>
    );
  }

  return (
    <Carousel>
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.vote_average.toFixed(1)}</p>
          <p>{movie.overview}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default NewReleases;
