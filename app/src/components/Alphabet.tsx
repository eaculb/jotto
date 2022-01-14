import React from "react";

import Divider from "@mui/material/Divider";

import Letter from "src/components/Letter";
import { useGame } from "src/contexts/GameProvider";
import { charFromIndex } from "src/lib/utils";

export default function Alphabet() {
  const { letterStatuses } = useGame();

  return (
    <>
      <Divider sx={{ my: { xs: 1, md: 3 } }} />
      {letterStatuses.map((_, ix) => {
        const char = charFromIndex(ix);
        return <Letter changeColor key={char} value={char} />;
      })}
    </>
  );
}
