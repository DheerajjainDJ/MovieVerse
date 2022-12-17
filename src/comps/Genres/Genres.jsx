import React, { useEffect } from "react";
import axios from "axios";
import { Chip, Box } from "@mui/material";
import { useStyles } from "./genresStyles";

const Genres = ({
  type,
  page,
  setPage,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}) => {
  const classes = useStyles();

  const selectedGenreHandler = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((gn) => gn.id !== genre.id));
    setPage(1);
  };

  const selectedDeletion = (genre) => {
    setSelectedGenres(selectedGenres.filter((sg) => sg.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=1d7ae0508105d90d7af9b43e174d4f9d&language=en-US`,
        { cancelToken: cancelToken.token }
      )
      .then((response) => {
        setGenres(response.data.genres);
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
  }, [page]);

  return (
    <Box className={classes.chipBox}>
      {selectedGenres &&
        selectedGenres.map((sg) => (
          <Chip
            key={sg.id}
            label={sg.name}
            clickable
            size="medium"
            color="success"
            variant="outlined"
            onDelete={() => selectedDeletion(sg)}
            sx={{ margin: "5px" }}
            className={classes.chip}
          />
        ))}

      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            clickable
            onClick={() => selectedGenreHandler(genre)}
            size="medium"
            variant="outlined"
            sx={{ margin: "5px" }}
            className={classes.chip}
          />
        ))}
    </Box>
  );
};

export default React.memo(Genres);
