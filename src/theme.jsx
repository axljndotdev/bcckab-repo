import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Set the mode to dark
    primary: {
      main: "#8b0000", // Maroon color
      alternative: {},
    },
    secondary: {
      main: "#8a2be2", // Brown color
    },
    background: {
      default: "#303030", // Dark grey background
      paper: "#424242", // Dark grey background for paper elements
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#bdbdbd", // Light grey text
    },
    button: {
      primary: "#ffffff", // White text
      secondary: "#bdbdbd", // Light grey text
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, Helvetica, sans-serif',
    h6: {
      fontWeight: 700,
    },
  },
});

export default theme;
