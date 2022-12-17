import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import ReactPlayer from "react-player";
const Carousel = lazy(() => import("./Carousel"));
const MoreCarousel = lazy(() => import("./MoreCarousel"));

const MoreInfo = ({ id, type }) => {
  const [videoKey, setVideoKey] = useState();
  const [content, setContent] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);

  const fetchVideoKey = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=1d7ae0508105d90d7af9b43e174d4f9d&language=en-US`
    );
    setVideoKey(
      response?.data.results?.find((res) => res.type === "Trailer").key
    );
  };

  const fetchContent = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=1d7ae0508105d90d7af9b43e174d4f9d&language=en-US`
    );
    setContent(response.data);
  };

  const fetchSimilarContent = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=1d7ae0508105d90d7af9b43e174d4f9d&language=en-US&page=1`
    );
    setSimilarContent(response.data.results);
  };

  useEffect(() => {
    fetchVideoKey();
    fetchContent();
    fetchSimilarContent();
  }, [id, type]);

  return (
    <>
      {videoKey && (
        <Box py={3} sx={{ backgroundColor: "#151515" }}>
          <Container maxWidth="md">
            <ReactPlayer
              controls
              width="100%"
              url={`https://www.youtube.com/watch?v=${videoKey}`}
            />
          </Container>
        </Box>
      )}
      <Divider color="gray" />
      {content?.cast?.length !== 0 ? (
        <>
          <Box py={1}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                color="#fff"
                p={1}
                ml={2}
                fontWeight="bold"
              >
                Cast
              </Typography>
              <Suspense fallback={<CircularProgress />}>
                <Carousel carouselContent={content.cast} />
              </Suspense>
            </Container>
          </Box>
          <Divider color="gray" />
        </>
      ) : null}
      {content?.crew?.length !== 0 ? (
        <>
          <Box py={1}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                color="#fff"
                p={1}
                ml={2}
                fontWeight="bold"
              >
                Crew
              </Typography>
              <Suspense fallback={<CircularProgress />}>
                <Carousel carouselContent={content.crew} />
              </Suspense>
            </Container>
          </Box>
          <Divider color="gray" />
        </>
      ) : null}
      {similarContent?.length !== 0 ? (
        <Box sx={{ paddingTop: "20px" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              color="#fff"
              p={1}
              my={1}
              fontWeight="bold"
            >
              More like this
            </Typography>
            <Suspense fallback={<CircularProgress />}>
              <MoreCarousel id={id} type={type} content={similarContent} />
            </Suspense>
          </Container>
        </Box>
      ) : null}
    </>
  );
};

export default React.memo(MoreInfo);
