import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "src/lib/theme";
import GameProvider from "src/contexts/GameProvider";
import HowToDrawer from "src/components/HowToDrawer";
import MeatballMenu from "src/components/MeatballMenu";
import GuessArea from "src/components/GuessArea";
import LetterArea from "src/components/LetterArea";
import { grey } from "@mui/material/colors";

export default function Game() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameProvider>
        <Box sx={{ display: "flex", position: "relative", minHeight: "100vh" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.default,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: theme.appBarHeight,
              px: 3,
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <HowToDrawer />
            <MeatballMenu />
          </Stack>
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
