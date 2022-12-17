import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    height: "400px",
  },
  cardImg: {
    transitionDuration: "0.8s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "brightness(75%)",
    },
  },
  cardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
