import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Letter from "./Letter";
import { charFromIndex } from "../utils";
import { useGame, GameContextValue } from "../contexts/GameProvider";

interface Props {
  shouldBeGuessed: boolean;
  title: string;
}

export default function LetterGroup({ shouldBeGuessed, title }: Props) {
  // @ts-ignore
  const { letterStatuses }: GameContextValue = useGame();
  useEffect(() => {
    console.log(letterStatuses);
  }, [letterStatuses]);
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
