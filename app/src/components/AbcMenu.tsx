import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import AbcIcon from "@mui/icons-material/Abc";

import Alphabet from "src/components/Alphabet";
import theme from "src/lib/theme";
import { DrawerGroupProps } from "src/lib/utils";

export default function AbcMenu({ open, toggle, onClose }: DrawerGroupProps) {
  return (
    <>
      <Button
        variant="text"
        onClick={toggle}
        sx={{ display: { xs: "inherit", md: "none" } }}
      >
        <AbcIcon />
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
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          <Alphabet />
        </Box>
      </Drawer>
    </>
  );
}
