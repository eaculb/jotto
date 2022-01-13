import React, { useCallback, useState } from "react";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ExtraControls from "src/components/ExtraControls";
import theme from "src/lib/theme";

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
