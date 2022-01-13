import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../theme";

import Guess from "./Guess";
import { GameContextValue, useGame } from "../contexts/GameProvider";

export default function GuessArea() {
  const { guesses }: GameContextValue = useGame();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "320px" },
        position: "relative",
        borderColor: theme.palette.primary.light,
        px: 2,
        pb: 3,
      }}
    >
      <Typography variant="subtitle1">Your guesses:</Typography>
      <Box sx={{ maxHeight: "100%", overflow: "auto", pr: 3 }}>
        {guesses.map((guess) => (
          <Guess word={guess.guess} overlapCount={guess.overlap} />
        ))}
      </Box>
    </Box>
  );
}
