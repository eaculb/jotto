import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../theme";
import GameProvider from "../contexts/GameProvider";
import Menu from "../components/Menu";
import GuessArea from "./GuessArea";
import LetterArea from "./LetterArea";

export default function Game() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameProvider>
        <Box sx={{ display: "flex", position: "relative", minHeight: "100vh" }}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Menu />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: theme.appBarHeight,
              width: "100%",
              pt: 1,
              height: `calc(100vh - ${theme.appBarHeight}px)`,
              display: "flex",
              justifyContent: { xs: "stretch", md: "center" },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{
                maxHeight: {
                  xs: "none",
                  md: `calc(100vh - ${theme.appBarHeight}px)`,
                },
              }}
            >
              <LetterArea />
              <GuessArea />
            </Stack>
          </Box>
        </Box>
      </GameProvider>
    </ThemeProvider>
  );
}
