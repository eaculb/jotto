import React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import LetterGroup from "./LetterGroup";
import GuessInput from "./GuessInput";
import { useGame } from "../contexts/GameProvider";

export default function LetterArea() {
  // @ts-ignore
  const { reset, clearAnnotations, globalError, revealed, setRevealed } =
    useGame();
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
        <Grid item xs={12} md={6} sx={{ px: 2 }}>
          <Button
            variant="outlined"
            disabled={revealed}
            fullWidth
            sx={{ mb: 2 }}
            onClick={clearAnnotations}
          >
            Clear Annotations
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => setRevealed(true)}
            disabled={revealed}
          >
            Reveal Word
          </Button>
          <Button
            variant={revealed ? "contained" : "outlined"}
            fullWidth
            sx={{ mb: 2 }}
            onClick={reset}
          >
            Reset
          </Button>
        </Grid>
        <LetterGroup title="Unused Letters" shouldBeGuessed={false} />
        <LetterGroup title="Used Letters" shouldBeGuessed={true} />
      </Grid>
    </Box>
  );
}
