import React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Alphabet from "src/components/Alphabet";
import GuessInput from "src/components/GuessInput";
import { useGame } from "src/contexts/GameProvider";
import ExtraControls from "src/components/ExtraControls";

export default function LetterArea() {
  const { globalError } = useGame();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "540px" },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: 2, display: { xs: "none", md: "inherit" } }}
        >
          <ExtraControls />
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: 2 }}>
          <GuessInput />
          {globalError && <Alert severity="error">{globalError}</Alert>}
        </Grid>
        <Grid item xs={12} sx={{ px: 2, display: { xs: "none", md: "block" } }}>
          <Divider sx={{ my: { xs: 1, md: 3 } }} />
          <Alphabet />
        </Grid>
      </Grid>
    </Box>
  );
}
