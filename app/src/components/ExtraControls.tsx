import React, { useMemo } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useGame } from "../contexts/GameProvider";

export default function ExtraControls() {
  const { reset, clearAnnotations, revealed, setRevealed, success } = useGame();
  const gameOver = useMemo(() => success || revealed, [success, revealed]);
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
      {!gameOver ? (
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          onClick={() => setRevealed(true)}
        >
          Reveal Word
        </Button>
      ) : (
        <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={reset}>
          Reset
        </Button>
      )}
    </Stack>
  );
}
