import { grey, teal, amber, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    appBarHeight: number;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appBarHeight?: number;
  }
}

const theme = createTheme({
  typography: {
    h1: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "6rem",
    },
    h2: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "4rem",
    },
    h3: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "3rem",
    },
    h4: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "2.2rem",
    },
    h5: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "2rem",
    },
    h6: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "1.8rem",
    },
    subtitle1: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    subtitle2: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 600,
      fontSize: "1.4rem",
    },
    body1: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.4rem",
    },
    body2: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.2rem",
    },
    button: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.2rem",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: grey[900],
    },
    info: {
      main: amber[400],
    },
    warning: {
      main: pink[400],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        size: "medium",
      },
      styleOverrides: {
        root: {
          minWidth: 0,
        },
        sizeSmall: {
          height: "32px",
        },
        sizeMedium: {
          height: "40px",
        },
        sizeLarge: {
          height: "48px",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
  // Used for consistency in the app bar size
  appBarHeight: 64,
});

export default theme;
