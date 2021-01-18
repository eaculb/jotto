import React from "react";

interface Props {
  numGuesses: number;
  onReset: () => void;
}

export default function ResetGame({ numGuesses, onReset }: Props) {
  return (
    <div>
      <p>Congrats! You guessed the word in {numGuesses} guesses!</p>
      <button className="submit-button" onClick={onReset}>
        New Game
      </button>
    </div>
  );
}
