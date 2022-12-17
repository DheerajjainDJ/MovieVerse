import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu, CloseRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import { useStyles } from "./HeaderStyles";

const Header = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        backgroundColor: "#FFDE00",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar className={classes.navbar}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "29px" },
                letterSpacing: "1.5px",
              }}
              color="black"
            >
              MOVIESVERSE
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavList />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleDrawer} sx={{ color: "black" }}>
              <Menu />
            </IconButton>
            <Drawer open={drawer} anchor="right" onClose={handleDrawer}>
              <Box className={classes.drawerBox}>
                <IconButton
                  sx={{
                    display: "flex",
                    color: "black",
                    margin: "0 auto",
                  }}
                  onClick={handleDrawer}
                >
                  <CloseRounded />
                </IconButton>
                <Box onClick={handleDrawer} color="black" mt="80px">
                  <NavList />
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default React.memo(Header);
