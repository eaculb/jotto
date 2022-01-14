import React, { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";

import theme from "src/lib/theme";
import HowToDrawer from "src/components/HowToDrawer";
import AbcMenu from "src/components/AbcMenu";
import MeatballMenu from "src/components/MeatballMenu";

enum DrawerOption {
  HOW_TO,
  ABC,
  MORE,
}

export default function MenuBar() {
  const [openDrawer, setOpenDrawer] = useState<DrawerOption | null>(null);
  const closeAll = useCallback(() => setOpenDrawer(null), [setOpenDrawer]);

  const toggle = useCallback(
    (key: DrawerOption) => () => {
      if (openDrawer === key) {
        setOpenDrawer(null);
      } else {
        setOpenDrawer(key);
      }
    },
    [openDrawer, setOpenDrawer]
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: theme.appBarHeight,
        px: 3,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <HowToDrawer
        open={openDrawer === DrawerOption.HOW_TO}
        toggle={toggle(DrawerOption.HOW_TO)}
        onClose={closeAll}
      />
      <Stack direction="row">
        <AbcMenu
          open={openDrawer === DrawerOption.ABC}
          toggle={toggle(DrawerOption.ABC)}
          onClose={closeAll}
        />
        <MeatballMenu
          open={openDrawer === DrawerOption.MORE}
          toggle={toggle(DrawerOption.MORE)}
          onClose={closeAll}
        />
      </Stack>
    </Stack>
  );
}
