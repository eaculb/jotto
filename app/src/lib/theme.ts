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

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    letter: React.CSSProperties;
    letterSmall: React.CSSProperties;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    letter?: React.CSSProperties;
    letterSmall?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    letter: true;
    letterSmall: true;
  }
}

const theme = createTheme({
  typography: {
    h1: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "2.2rem",
    },
    h2: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "1.8rem",
    },
    h4: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    h5: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    h6: {
      // fontFamily: "adobe-caslon-pro, serif",
      fontWeight: 600,
      fontSize: "1.4rem",
    },
    subtitle1: {
      fontFamily: "Noto Sans Mono, Roboto Mono, monospace",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    subtitle2: {
      fontFamily: "Noto Sans Mono, Roboto Mono, monospace",
      fontWeight: 600,
      fontSize: "1.2rem",
    },
    body1: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1.2rem",
    },
    body2: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      // fontFamily: "Crimson Text, serif",
      fontWeight: 400,
      fontSize: "1rem",
      textTransform: "none",
    },
    letter: {
      fontFamily: "Noto Sans Mono, Roboto Mono, monospace",
      fontWeight: 600,
      fontSize: "1.4rem",
    },
    letterSmall: {
      fontFamily: "Noto Sans Mono, Roboto Mono, monospace",
      fontWeight: 600,
      fontSize: "1rem",
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
          borderWidth: "2px",
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "40px",
        },
      },
    },
  },
  // Used for consistency in the app bar size
  appBarHeight: 64,
});

export default theme;
