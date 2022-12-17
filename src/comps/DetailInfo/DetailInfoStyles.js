import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  parentBox: {
    color: "#fff",
    height: "100%",
    padding: "50px 0",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      padding: "35px 5px",
    },
  },
  gridItem2: {
    marginTop: "50px",
  },
  overViewText: {
    fontSize: "18px",
    color: "lightgray",
    textAlign: "justify",
    marginTop: "5px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  overviewReadMore: {
    display:"inline",
    cursor: "pointer",
    color: "gray",
    transition: "color 0.4s",
    "&:hover": {
      color: "lightgray",
    },
  },
}));
