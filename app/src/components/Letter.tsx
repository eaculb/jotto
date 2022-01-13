import React, { useMemo } from "react";
import Button from "@mui/material/Button";

import { GameContextValue, useGame } from "../contexts/GameProvider";
import { indexFromChar } from "../utils";

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
        status === true ? "info" : status === false ? "warning" : "secondary"
      }
      variant={status === true || status === false ? "contained" : "text"}
    >
      {value}
    </Button>
  );
}
