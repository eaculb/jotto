import React from "react";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ExtraControls from "src/components/ExtraControls";
import theme from "src/lib/theme";
import { DrawerGroupProps } from "src/lib/utils";

export default function MeatballMenu({
  open,
  toggle,
  onClose,
}: DrawerGroupProps) {
  return (
    <>
      <Button
        variant="text"
        onClick={toggle}
        sx={{ display: { xs: "inherit", md: "none" } }}
      >
        <MoreHorizIcon />
      </Button>
      <Drawer
        anchor="top"
        open={open}
        onClose={onClose}
        sx={{
          [`& .MuiDrawer-paper`]: {
            top: theme.appBarHeight,
            padding: 2,
          },
        }}
      >
        <ExtraControls />
      </Drawer>
    </>
  );
}
