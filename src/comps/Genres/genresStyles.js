import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  chipBox: {
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: 0,
      left: 0,
      zIndex: "unset",
      display: "flex",
      flexWrap: "nowrap",
      overflowX: "auto",
      "&::-webkit-scrollbar": {
        width: "0px",
      },
    },
  },
  chip: {
    transform: "0.8s",
    color: "#fff",
    "&:hover": {
      transform: "scale(1.2)",
      transitionDuration: "1.2s",
      fontWeight: "bolder",
    },
  },
}));
