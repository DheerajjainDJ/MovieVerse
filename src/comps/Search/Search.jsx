import React, { useState, useEffect, useCallback } from "react";
import { Box, Container, Tabs, Tab, Grid, Typography } from "@mui/material";
import axios from "axios";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SingleContent from "../singleContent/SingleContent";
import CustomPagination from "../customPagination/CustomPagination";
import SearchUtils from "./SearchUtils/SearchUtils";
import SearchStates from "./SearchUtils/SearchStates";

const Search = ({
  searchText,
  setSearchText,
  page,
  setPage,
  value,
  setValue,
}) => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };

  const handleTextClear = () => {
    setSearchText("");
    setContent([]);
    setNumOfPages(1)
    setPage(1);
    setValue(0);
  };

  const fetchSearch = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/${
          value ? "tv" : "movie"
        }?api_key=1d7ae0508105d90d7af9b43e174d4f9d&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      )
      .then((response) => {
        setContent(response.data);
        setNumOfPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchText, value, page]);

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [page, value]);

  return (
    <Container maxWidth="lg">
      <Box sx={{marginTop:"100px"}}>
        <SearchUtils
          searchText={searchText}
          setSearchText={setSearchText}
          fetchSearch={fetchSearch}
          handleTextClear={handleTextClear}
        />
        <Container maxWidth="lg" disableGutters>
          <Tabs value={value} centered onChange={handleTabChange}>
            <Tab
              value={0}
              icon={<MovieIcon sx={{ color: "#fff" }} />}
              label={<Typography color="#fff">MOVIES</Typography>}
              disabled={!searchText}
            />
            <Tab
              value={1}
              icon={<TvIcon sx={{ color: "#fff" }} />}
              label={<Typography color="#fff">TV</Typography>}
              disabled={!searchText}
            />
          </Tabs>
          <Grid
            container
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="center"
            py={2}
          >
            {content.length === 0 && (
              <SearchStates
                url={
                  "https://cdn-icons-png.flaticon.com/512/437/437972.png?w=740&t=st=1666180702~exp=1666181302~hmac=1ec5777a85c65e1c53f516a9dbe9caae2a61e8bc7b8a7009f2e62211a333408e"
                }
                text="Search Your Favourite Movie Or Tv Show"
              />
            )}
            {content?.total_results !== 0 ? (
              content?.results &&
              content?.results.map((c) => (
                <SingleContent
                  key={c.id}
                  id={c.id}
                  title={c.original_title || c.name}
                  posterPath={c.poster_path}
                  voteAverage={c.vote_average}
                  mediaType={`${value ? "tv" : "movie"}`}
                />
              ))
            ) : (
              <SearchStates
                url={
                  "https://img.freepik.com/premium-vector/no-data-concept-illustration_203587-28.jpg?w=740"
                }
                text="No Results Found"
              />
            )}
          </Grid>
          {numOfPages > 1 && (
            <CustomPagination
              page={page}
              setPage={setPage}
              numOfPages={numOfPages}
            />
          )}
        </Container>
      </Box>
    </Container>
  );
};

export default React.memo(Search);
