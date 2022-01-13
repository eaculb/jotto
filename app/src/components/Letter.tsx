import React, { useMemo } from "react";
import Button from "@mui/material/Button";

import { Status, GameContextValue, useGame } from "src/contexts/GameProvider";
import { indexFromChar } from "src/lib/utils";

interface Props {
  value: string;
}

export default function Letter({ value }: Props) {
  const { letterStatuses, toggleLetter }: GameContextValue = useGame();
  const status = useMemo(
    () => letterStatuses[indexFromChar(value)].status,
    [letterStatuses, value]
  );

  return (
    <Button
      sx={{
        height: { xs: "2.4rem", md: "3.2rem" },
        width: { xs: "2.4rem", md: "3.2rem" },
        borderRadius: 0,
      }}
      onClick={() => toggleLetter(value)}
      color={
        status === Status.IN
          ? "info"
          : status === Status.OUT
          ? "warning"
          : "secondary"
      }
      variant={
        status === Status.IN || status === Status.OUT ? "contained" : "text"
      }
    >
      {value}
    </Button>
  );
}
