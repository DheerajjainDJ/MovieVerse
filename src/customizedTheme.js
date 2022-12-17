import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          color: "#fff",
          fontSize: "13px",
          fontWeight: "bold",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#FFDE00",
          fontWeight: "bold",
          fontSize: "13px",
          border: "1px solid #FFDE00",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "2px solid #FFDE00",
          borderRadius: "5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          fontSize: "20px",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#FFDE00",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
        },
      },
    },
  },
});
