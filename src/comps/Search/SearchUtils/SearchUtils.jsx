import React from "react";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";

const SearchUtils = ({
  searchText,
  setSearchText,
  fetchSearch,
  handleTextClear,
}) => {
  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search..."
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => (e.code === "Enter" ? fetchSearch() : null)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#FFDE00" }} />
            </InputAdornment>
          ),
          endAdornment: searchText && (
            <InputAdornment position="end">
              <Tooltip title="Clear Text" arrow>
                <IconButton onClick={handleTextClear}>
                  <CancelIcon sx={{ color: "#FFDE00" }} />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        size="large"
        disabled={!searchText}
        onClick={fetchSearch}
        sx={{
          margin: "0 7px",
          padding: { xs: "9px 20px", md: "13px 35px" },
          backgroundColor: "black",
          color: "#FFDE00",
        }}
      >
        Search
      </Button>
    </Container>
  );
};

export default React.memo(SearchUtils);
