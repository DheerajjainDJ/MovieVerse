import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../singleContent/SingleContent";
import CustomPagination from "../customPagination/CustomPagination";

const Trending = ({ page, setPage }) => {
  const [trendingContent, setTrendingContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=1d7ae0508105d90d7af9b43e174d4f9d&page=${page}`,
        { cancelToken: cancelToken.token }
      )
      .then((response) => {
        setTrendingContent(response.data.results);
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
  }, [page]);
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        textTransform="uppercase"
        py={{ xs: "15px", md: "25px" }}
        color="#fff"
      >
        Trending
      </Typography>
      <Grid
        container
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        pb="10px"
      >
        {trendingContent &&
          trendingContent.map((tc) => (
            <SingleContent
              key={tc.id}
              id={tc.id}
              title={tc.title || tc.original_name}
              posterPath={tc.poster_path}
              releaseDate={tc.release_date}
              voteAverage={tc.vote_average}
              mediaType={tc.media_type}
            />
          ))}
      </Grid>
      <CustomPagination page={page} numOfPages={numOfPages} setPage={setPage} />
    </Container>
  );
};

export default React.memo(Trending);
