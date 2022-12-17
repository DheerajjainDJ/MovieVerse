import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "inherit",
  },
  list: {
    position: "relative",
    margin: "0 10px",
    color: "black",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px 100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      justifySelf: "flex-end",
    },
  },
  listitem: {
    paddingBottom: "1px",
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "2px",
      width: "90%",
      backgroundColor: "black",
      transform: "ScaleX(0)",
      transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
      transformOrigin: "right center",
    },
    "&:hover::after": {
      transform: "ScaleX(1)",
      transformOrigin: "left center",
      transitionDuration: "1.5s",
    },
  },
  drawerBox: {
    width: "250px",
    height: "100%",
    backgroundColor: "#FFDE00",
    overflow: "hidden",
  },
}));
