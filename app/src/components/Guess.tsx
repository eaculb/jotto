import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Letter from "./Letter";

interface Props {
  word: string;
  overlapCount: number;
}

export default function Guess({ word, overlapCount }: Props) {
  return (
    <Stack direction="row" alignItems="center">
      {word
        .toUpperCase()
        .split("")
        .map((char, ix) => (
          <Letter key={ix} value={char} />
        ))}

      <Typography sx={{ ml: 3 }}>{overlapCount}</Typography>
    </Stack>
  );
}
