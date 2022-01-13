import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Letter from "src/components/Letter";
import { useGame, GameContextValue } from "src/contexts/GameProvider";
import { charFromIndex } from "src/lib/utils";

interface Props {
  shouldBeGuessed: boolean;
  title: string;
}

export default function LetterGroup({ shouldBeGuessed, title }: Props) {
  const { letterStatuses }: GameContextValue = useGame();

  return (
    <>
      <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
        <Typography variant="subtitle2">{title}</Typography>
        {letterStatuses.map(({ status, guessed }, ix) => {
          const char = charFromIndex(ix);
          return guessed === shouldBeGuessed ? (
            <Letter key={char} value={char} />
          ) : (
            <></>
          );
        })}
      </Grid>
    </>
  );
}
