import React from "react";

import Letter from "./Letter";
import { indexFromChar } from "../utils";
import { LetterStatus } from "./Game";

interface Props {
  word: string;
  overlapCount: number;
  letterStatuses: LetterStatus[];
  handleLetterClick: (char: string) => void;
}

export default function Guess({
  word,
  overlapCount,
  letterStatuses,
  handleLetterClick,
}: Props) {
  return (
    <div className="guess">
      {word
        .toUpperCase()
        .split("")
        .map((char, ix) => (
          <Letter
            key={ix}
            value={char}
            status={letterStatuses[indexFromChar(char)].status}
            onLetterClick={(char) => {
              handleLetterClick(char);
            }}
          />
        ))}
      <div className="overlap-ct">{overlapCount}</div>
    </div>
  );
}
