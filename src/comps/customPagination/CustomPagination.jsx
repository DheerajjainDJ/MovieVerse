import React from "react";
import { Box, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "40px 0 30px 0",
  },
}));
const CustomPagination = ({ page, numOfPages, setPage }) => {
  const classes = useStyles();

  const handlePageChange = (event, value) => {
    window.scroll(0, 0);
    setPage(value);
  };
  return (
    <Box className={classes.pagination}>
      <Pagination
        count={numOfPages}
        page={page}
        color="secondary"
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default React.memo(CustomPagination);
