import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "src/lib/theme";

import Guess from "src/components/Guess";
import { GameContextValue, useGame } from "src/contexts/GameProvider";

export default function GuessArea() {
  const { guesses }: GameContextValue = useGame();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "320px" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderColor: theme.palette.primary.light,
        px: 2,
        pb: 3,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        Your guesses:
      </Typography>
      {guesses.length === 0 && (
        <Typography
          variant="letterSmall"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Guesses will appear here.
        </Typography>
      )}
      <Box sx={{ pr: 3 }}>
        {guesses.map((guess) => (
          <Guess word={guess.guess} overlapCount={guess.overlap} />
        ))}
      </Box>
    </Box>
  );
}
