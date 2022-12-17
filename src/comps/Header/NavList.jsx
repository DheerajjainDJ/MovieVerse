import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Whatshot, Movie, Tv, Search } from "@mui/icons-material";
import { useStyles } from "./HeaderStyles";

const NavList = () => {
  const classes = useStyles();
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        color: "black",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <ListItem disablePadding className={classes.list}>
          <ListItemIcon
            sx={{
              minWidth: "2px",
              color: "black",
              marginRight: "3px",
            }}
          >
            <Whatshot />
          </ListItemIcon>
          <ListItemText
            className={classes.listitem}
            primary={<Typography variant="subtitle1">Trending</Typography>}
          />
        </ListItem>
      </Link>
      <Link to="/movies" style={{ textDecoration: "none", color: "#fff" }}>
        <ListItem disablePadding className={classes.list}>
          <ListItemIcon
            sx={{
              minWidth: "2px",
              color: "black",
              marginRight: "3px",
            }}
          >
            <Movie />
          </ListItemIcon>
          <ListItemText
            className={classes.listitem}
            primary={<Typography>Movies</Typography>}
          />
        </ListItem>
      </Link>
      <Link to="/tv" style={{ textDecoration: "none", color: "#fff" }}>
        <ListItem disablePadding className={classes.list}>
          <ListItemIcon
            sx={{
              minWidth: "1px",
              color: "black",
              marginRight: "3px",
            }}
          >
            <Tv />
          </ListItemIcon>
          <ListItemText
            className={classes.listitem}
            primary={<Typography>TV</Typography>}
          />
        </ListItem>
      </Link>
      <Link to="/search" style={{ textDecoration: "none", color: "#fff" }}>
        <ListItem disablePadding className={classes.list}>
          <ListItemIcon
            sx={{
              minWidth: "10px",
              color: "black",
              marginRight: "3px",
            }}
          >
            <Search />
          </ListItemIcon>
          <ListItemText
            className={classes.listitem}
            primary={<Typography>Search</Typography>}
          />
        </ListItem>
      </Link>
    </List>
  );
};

export default NavList;
