import React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useGame } from "../contexts/GameProvider";

export default function ExtraControls() {
  // @ts-ignore
  const { reset, clearAnnotations, revealed, setRevealed } = useGame();
  return (
    <Stack direction="column" sx={{ width: "100%" }}>
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
    </Stack>
  );
}
