import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cbd5e0",
      light: "#95C6B6",
      dark: "#000000"
    },
    //This secondary section is for managing mui component colours
    secondary: {
      main: "#FFFFFF",
      light: "#92BBB3", // link color
      dark: "#000"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          border: "2px solid #ffffff",
          borderRadius: "30px",
          color: "#FFFFFF",
          textTransform: "capitalize"
        }
      },
      defaultProps: {
        size: "medium"
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          color: "#fff",
          borderColor: "#fff",
          border: "2px solid #ffffff",
          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        }
      }
    }
  },

  typography: {
    fontFamily: "montserrat",
    h1: {
      color: "#FFFFFF"
    },
    h2: {
      color: "#fff"
    },
    h3: {
      color: "#000"
    },

    h5: {
      color: "#000"
    },
    h6: {
      color: "#000"
    }
  }
});

export default responsiveFontSizes(theme);
