import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { GameContextValue, useGame } from "src/contexts/GameProvider";

export default function GuessInput() {
  const {
    addGuess: onSubmit,
    guesses,
    revealed,
    target,
    success,
    reset,
  }: GameContextValue = useGame();

  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.toUpperCase());
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
        <Typography variant="body1" sx={{ mb: 3 }}>
          Better luck next time!
        </Typography>
      </>
    );
  }

  if (success) {
    return (
      <>
        <Typography variant="subtitle1">Success!</Typography>
        <Typography variant="body1">
          {`You successfully guessed `}
          <Typography variant="letter">{target}</Typography>
          {` after `}
          <Typography variant="letter">{guesses.length}</Typography>
          {` guesses.`}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ display: { xs: "block", md: "none" }, my: 1 }}
          onClick={reset}
        >
          Play Again
        </Button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        autoComplete="off"
        fullWidth
        hiddenLabel
        id="guess-input"
        value={value}
        onChange={handleChange}
        size="small"
        sx={{ textAlign: "center" }}
      />
      <Button fullWidth sx={{ my: 2 }} type="submit">
        Submit
      </Button>
    </form>
  );
}
