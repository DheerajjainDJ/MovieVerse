import { useState, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorBoundary";
import { Box, ThemeProvider, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comps/Header/Header";
import { theme } from "./customizedTheme";
const Trending = lazy(() => import("./comps/Trending/Trending"));
const Movies = lazy(() => import("./comps/Movies/Movies"));
const TV = lazy(() => import("./comps/TV/TV"));
const Search = lazy(() => import("./comps/Search/Search"));
const DetailInfo = lazy(() => import("./comps/DetailInfo/DetailInfo"));

function App() {
  const [trendingPage, setTrendingPage] = useState(1);
  const [moviePage, setMoviePage] = useState(1);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieSelectedGenres, setMovieSelectedGenres] = useState([]);
  const [tvPage, setTvPage] = useState(1);
  const [tvGenres, setTvGenres] = useState([]);
  const [selectedTvGenres, setTvSelectedGenres] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<CircularProgress />}>
            <Box mt={"55px"}>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Trending page={trendingPage} setPage={setTrendingPage} />
                  }
                />
                <Route
                  exact
                  path="/movies"
                  element={
                    <Movies
                      page={moviePage}
                      setPage={setMoviePage}
                      genres={movieGenres}
                      setGenres={setMovieGenres}
                      selectedGenres={movieSelectedGenres}
                      setSelectedGenres={setMovieSelectedGenres}
                    />
                  }
                />
                <Route
                  exact
                  path="/tv"
                  element={
                    <TV
                      page={tvPage}
                      setPage={setTvPage}
                      genres={tvGenres}
                      setGenres={setTvGenres}
                      selectedGenres={selectedTvGenres}
                      setSelectedGenres={setTvSelectedGenres}
                    />
                  }
                />
                <Route
                  exact
                  path="/search"
                  element={
                    <Search
                      searchText={searchText}
                      setSearchText={setSearchText}
                      page={searchPage}
                      setPage={setSearchPage}
                      value={value}
                      setValue={setValue}
                    />
                  }
                />
                <Route exact path="/info/:type/:id" element={<DetailInfo />} />
              </Routes>
            </Box>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
