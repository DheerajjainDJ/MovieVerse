import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { img_300, unavailable } from "../../utils";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  carouselImage: {
    objectFit: "fill",
    height: "300px",
    borderRadius: "20px",
    transition: "transform 0.8s",
    "&:hover": {
      filter: "brightness(80%)",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      height: "150px",
    },
  },
}));

const MoreCarousel = ({ id, type, content }) => {
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      centerMode={true}
      autoPlay={true}
      keyBoardControl={true}
      autoPlaySpeed={8000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {content?.map((c) => (
        <Link
          key={c.id}
          to={`/info/${type}/${c.id}`}
          onClick={() => window.scroll(0, 0)}
          style={{
            textDecoration: "none",
            color: "unset",
          }}
        >
          <Box align="center" sx={{ height: { xs: "280px", md: "390px" } }}>
            <Box>
              <Box
                component="img"
                loading="lazy"
                src={c.poster_path ? `${img_300}${c.poster_path}` : unavailable}
                alt="similar"
                className={classes.carouselImage}
              />
            </Box>
            <Typography variant="subtitle1" color="#fff" mt={1}>
              {c.original_title || c.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </Carousel>
  );
};

export default MoreCarousel;
