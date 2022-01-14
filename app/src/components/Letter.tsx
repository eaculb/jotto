import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import X from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";
import Circle from "@mui/icons-material/CircleOutlined";

import { Status, GameContextValue, useGame } from "src/contexts/GameProvider";
import { indexFromChar } from "src/lib/utils";
import theme from "src/lib/theme";

interface Props {
  value: string;
  changeColor?: boolean;
  forceState?: { guessed: boolean; status: Status };
}

export default function Letter({
  value,
  changeColor = false,
  forceState,
}: Props) {
  const { letterStatuses, toggleLetter }: GameContextValue = useGame();
  const status = useMemo(
    () => forceState || letterStatuses[indexFromChar(value)],
    [forceState, letterStatuses, value]
  );

  let Icon;
  if (status.status === Status.IN) {
    Icon = Circle;
  } else if (status.status === Status.OUT) {
    Icon = X;
  }

  return (
    <Button
      sx={{
        height: { xs: "2.2rem", md: "2.8rem" },
        width: { xs: "2.2rem", md: "2.8rem" },
        borderRadius: 0,
        position: "relative",
        color:
          status.guessed && changeColor
            ? theme.palette.text.disabled
            : theme.palette.text.primary,
      }}
      onClick={() => toggleLetter(value)}
      variant="text"
    >
      {Icon && (
        <Icon
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            color: alpha(theme.palette.primary.main, 0.8),
          }}
        />
      )}
      <Typography variant="letter">{value}</Typography>
    </Button>
  );
}
