import React from "react";

import Letter from "src/components/Letter";
import { useGame } from "src/contexts/GameProvider";
import { charFromIndex } from "src/lib/utils";

export default function Alphabet() {
  const { letterStatuses } = useGame();

  return (
    <>
      {letterStatuses.map((_, ix) => {
        const char = charFromIndex(ix);
        return <Letter changeColor key={char} value={char} />;
      })}
    </>
  );
}
