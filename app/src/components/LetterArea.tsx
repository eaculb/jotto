import React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import LetterGroup from "./LetterGroup";
import GuessInput from "./GuessInput";
import { useGame } from "../contexts/GameProvider";
import ExtraControls from "./ExtraControls";

export default function LetterArea() {
  // @ts-ignore
  const { globalError } = useGame();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "640px" },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ px: 2 }}>
          <GuessInput />
          {globalError && <Alert severity="error">{globalError}</Alert>}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: 2, display: { xs: "none", md: "inherit" } }}
        >
          <ExtraControls />
        </Grid>
        <LetterGroup title="Unused Letters" shouldBeGuessed={false} />
        <LetterGroup title="Used Letters" shouldBeGuessed={true} />
      </Grid>
    </Box>
  );
}
