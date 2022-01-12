import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import theme from "../theme";

export default function HowToDrawer() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = useCallback(
    () => setDrawerOpen(!drawerOpen),
    [drawerOpen, setDrawerOpen]
  );

  return (
    <>
      <Button variant="text" startIcon={<MenuIcon />} onClick={toggleDrawer}>
        How To Play
      </Button>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          [`& .MuiDrawer-paper`]: {
            top: theme.appBarHeight,
            minHeight: { xs: `calc(100vh - ${theme.appBarHeight}px)`, md: 0 },
            maxHeight: `calc(100vh - ${theme.appBarHeight}px)`,
          },
        }}
      >
        <Stack sx={{ px: 3, py: 2 }} spacing={2}>
          <Typography variant="subtitle1">Rules of Jotto</Typography>
          <Typography variant="body1">
            "Legal Jotto words" are five-letter words with no repeating letters
            and that do not end in "s." The computer will select a random legal
            Jotto word as a target. The user can make guesses consisting of
            other legal Jotto words. The program will inform the user how many
            letters are in common between the target word and guess word
            (independent of position). The goal is to guess the target word in
            the least possible number of guesses.
          </Typography>
          <Typography variant="subtitle1">Using the Interface</Typography>
          <Typography variant="body1">
            Letters can be marked as "sure no" (red) by clicking once and "sure
            yes" (green) by clicking twice. To reset, click a third time.
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
}
