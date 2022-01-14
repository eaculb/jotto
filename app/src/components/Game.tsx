import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "src/lib/theme";
import GameProvider from "src/contexts/GameProvider";
import GuessArea from "src/components/GuessArea";
import LetterArea from "src/components/LetterArea";
import MenuBar from "src/components/MenuBar";
import { grey } from "@mui/material/colors";

export default function Game() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameProvider>
        <Box sx={{ display: "flex", position: "relative", minHeight: "100vh" }}>
          <MenuBar />
          <Box
            sx={{
              position: "absolute",
              top: theme.appBarHeight,
              width: "100%",
              height: `calc(100vh - ${theme.appBarHeight}px)`,
              display: "flex",
              justifyContent: { xs: "stretch", md: "center" },
              backgroundColor: grey[200],
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{
                backgroundColor: "white",
                pt: 3,
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
