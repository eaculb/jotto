import React from "react";

import Letter from "./Letter";
import { LetterStatus } from "./Game";
import { charFromIndex } from "../utils";

interface Props {
  letterStatuses: LetterStatus[];
  shouldBeGuessed: boolean;
  handleClick: (letter: string) => void;
}

export default function LetterGroup({
  letterStatuses,
  shouldBeGuessed,
  handleClick,
}: Props) {
  return (
    <>
      {letterStatuses.map(({ status, guessed }, ix) => {
        const char = charFromIndex(ix);
        return guessed === shouldBeGuessed ? (
          <Letter
            key={char}
            value={char}
            status={status}
            onLetterClick={() => handleClick(char)}
          />
        ) : (
          <></>
        );
      })}
    </>
  );
}
