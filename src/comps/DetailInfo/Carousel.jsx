import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300 } from "../../utils";

const Carousel = ({ carouselContent }) => {
  const handleDragStart = (e) => e.preventDefault();

  const items =
    carouselContent &&
    carouselContent.map((c) => (
      <Stack spacing={1} alignItems="center" justifyContent="center">
        {c.profile_path ? (
          <Box
            component="img"
            loading="lazy"
            src={`${img_300}${c.profile_path}`}
            alt="cast"
            onDragStart={handleDragStart}
            sx={{
              borderRadius: "100%",
              width: { xs: "120px", md: "140px" },
              height: { xs: "130px", md: "170px" },
              margin: "10px",
              boxShadow: "inset 0px 1px 2px rgba(0,0,0,0.25)",
            }}
          />
        ) : (
          <Box
            sx={{
              backgroundColor: "lightgray",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: { xs: "100px", md: "140px" },
              height: { xs: "110px", md: "170px" },
              marginTop: { xs: "10px", md: "inherit" },
              margin: "10px",
              boxShadow: "inset 0px 1px 2px rgba(0,0,0,0.25)",
            }}
          >
            <Typography variant="h4">
              {c.name.split(" ").map((n) => n.charAt(0))}
            </Typography>
          </Box>
        )}
        <Typography variant="body1" align="center" color="#fff">
          {c.name}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="bold"
          color="gray"
          align="center"
        >
          {c.character || c.job}
        </Typography>
      </Stack>
    ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };
  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      mouseTracking
      infinite
      disableDotsControls
    />
  );
};

export default Carousel;
