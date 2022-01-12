import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { GameContextValue, useGame } from "../contexts/GameProvider";

export default function GuessInput() {
  // @ts-ignore
  const { addGuess: onSubmit, guesses, revealed, target, success }: GameContextValue = useGame();

  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(value);
    event.preventDefault();
    setValue("");
  };

  if (revealed) {
    return (
      <>
        <Typography variant="subtitle1">
          {`The word was ${target.toUpperCase()}.`}
        </Typography>
        <Typography variant="body1" sx={{mb: 3}}>
          Better luck next time!
        </Typography>
      </>
    );
  }

  if (success) {
    return (
      <>
        <Typography variant="subtitle1">
          Success!
        </Typography>
        <Typography variant="body1" sx={{mb: 3}}>
          {`You successfully guessed ${target} after ${guesses.length} guesses.`}
        </Typography>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        hiddenLabel
        id="guess-input"
        label="Make a guess"
        value={value}
        onChange={handleChange}
        size="small"
      />
      <Button fullWidth sx={{ my: 2 }} type="submit">
        Submit
      </Button>
    </form>
  );
}
