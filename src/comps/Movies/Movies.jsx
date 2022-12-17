import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import axios from "axios";
import SingleContent from "../singleContent/SingleContent";
import CustomPagination from "../customPagination/CustomPagination";
import Genres from "../Genres/Genres";
import useGenre from "../Genres/useGenre";

const Movies = ({
  page,
  setPage,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}) => {
  const [movieContent, setMovieContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(10);
  const genreForUrl = useGenre(selectedGenres);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=1d7ae0508105d90d7af9b43e174d4f9d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`,
        { cancelToken: cancelToken.token }
      )
      .then((response) => {
        setMovieContent(response.data.results);
        setNumOfPages(
          response.data.total_pages > 400 ? 400 : response.data.total_pages
        );
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          console.log(error);
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, [page, genreForUrl]);

  return (
    <Container maxWidth="lg">
      <Typography align="center" variant="h4" pt="30px" color="#fff">
        MOVIES
      </Typography>
      <Box py="15px" textAlign="center">
        <Genres
          type="movie"
          page={page}
          setPage={setPage}
          genres={genres}
          setGenres={setGenres}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </Box>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {movieContent &&
          movieContent.map((mc) => (
            <SingleContent
              key={mc.id}
              id={mc.id}
              mediaType="movie"
              title={mc.title || mc.original_title}
              posterPath={mc.poster_path}
              voteAverage={mc.vote_average}
              releaseDate={mc.release_date}
            />
          ))}
      </Grid>
      <CustomPagination page={page} numOfPages={numOfPages} setPage={setPage} />
    </Container>
  );
};

export default React.memo(Movies);
