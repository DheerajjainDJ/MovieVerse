import { Box, Container, Typography } from "@mui/material";
import React from "react";

const SearchStates = ({ url, text }) => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Box textAlign="center" mt={4}>
        <Box
          component="img"
          loading="lazy"
          sx={{
            height: "50%",
            width: "50%",
          }}
          src={`${url}`}
          alt="search state"
        />
        <Typography
          variant="subtitle2"
          mt={2}
          color="#fff"
          align="center"
          sx={{ fontSize: { xs: "15px", md: "20px" } }}
        >
          {text}
        </Typography>
      </Box>
    </Container>
  );
};

export default SearchStates;
