import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import { Status } from "src/contexts/GameProvider";
import Letter from "src/components/Letter";
import theme from "src/lib/theme";

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
        <Grid container sx={{ px: 3, py: 2 }} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Rules of Jotto</Typography>
            <Typography variant="body1">
              "Legal Jotto words" are five-letter words with no repeating
              letters and that do not end in "s." The computer will select a
              random legal Jotto word as a target. You can make guesses
              consisting of other legal Jotto words.
            </Typography>
            <Stack direction="column" alignItems="center" sx={{ py: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gridTemplateColumns: "1fr 3fr",
                  margin: "0px auto",
                }}
              >
                <Typography variant="letterSmall">BRIBE</Typography>
                <Typography>❌ Not legal - 'B' is repeated</Typography>
                <Typography variant="letterSmall">BINDS</Typography>
                <Typography>❌ Not legal - Ends in 'S'</Typography>
                <Typography variant="letterSmall">BRIDE</Typography>
                <Typography>✔️ Legal</Typography>
              </Box>
            </Stack>
            <Typography variant="body1">
              The program will inform you how many letters are in common between
              the target word and guess word (independent of position).
            </Typography>
            <Typography variant="body1">
              {"For example, if the target word was "}
              <Typography variant="letter">BRIDE</Typography>
              {","}
            </Typography>
            <Stack direction="column" alignItems="center" sx={{ py: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gridTemplateColumns: "5fr 7fr 4fr",
                  py: 3,
                }}
              >
                <Typography variant="letter">Guess</Typography>
                <Typography variant="letter">Overlap</Typography>
                <Typography variant="letter">Result</Typography>
                <Typography variant="letterSmall">FLING</Typography>
                <Typography variant="letterSmall">I</Typography>
                <Typography variant="letterSmall">1</Typography>
                <Typography variant="letterSmall">DEBIT</Typography>
                <Typography variant="letterSmall">D,E,B,I</Typography>
                <Typography variant="letterSmall">4</Typography>
                <Typography variant="letterSmall">HASTY</Typography>
                <Typography variant="letterSmall">-</Typography>
                <Typography variant="letterSmall">0</Typography>
              </Box>
            </Stack>
            <Typography variant="body1">
              The goal is to guess the target word in the least possible number
              of guesses.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Using the Interface</Typography>
            <Typography variant="body1">
              To cross out a letter, click on it once.
            </Typography>
            <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
              <Letter
                value="A"
                forceState={{ guessed: false, status: Status.OUT }}
              />
            </Box>

            <Typography variant="body1">
              To circle a letter, e.g. to confirm it is in the target word,
              click on it twice.
            </Typography>
            <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
              <Letter
                value="A"
                forceState={{ guessed: false, status: Status.IN }}
              />
            </Box>

            <Typography variant="body1">
              Clicking a third time will return a single letter to its unmarked
              state.
            </Typography>
            <Typography variant="body1">
              You can click "clear annotations" to remove all crosses and
              circles.
            </Typography>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
