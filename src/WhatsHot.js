import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import axios from 'axios';

const WhatsHot = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.REACT_APP_API_KEY)
      .then(res => {
        setMovies(res.data.results);
      })
  }, []);

  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2">{movie.vote_average.toFixed(1)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhatsHot;
