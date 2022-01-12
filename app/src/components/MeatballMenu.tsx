import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ExtraControls from "./ExtraControls";
import theme from "../theme";

export default function MeatballMenu() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = useCallback(
    () => setDrawerOpen(!drawerOpen),
    [drawerOpen, setDrawerOpen]
  );

  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer}
        sx={{ display: { xs: "inherit", md: "none" } }}
      >
        <MoreHorizIcon />
      </Button>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
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
