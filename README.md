# Jotto in React

This project was created to explore working with React. It emulates a simple game, Jotto.

### Rules of Jotto

"Legal Jotto words" are five-letter words with no repeating letters and that do not end in "s." The computer will select a random legal Jotto word as a target. The user can make guesses consisting of other legal Jotto words. The program will inform the user how many letters are in common between the target word and guess word (independent of position). The goal is to guess the target word in the least possible number of guesses.

## Getting started

The live app lives at https://jotto.eaculb.co/.
For the development version,

1. Clone this repo: `git@github.com:eaculb/jotto.git`
2. In the `app/` directory, run
```
yarn
yarn start
```

### Using the Interface

To aid the player, letters can be marked as "sure no" (red) by clicking once and "sure yes" (green) by clicking twice. To reset, click a third time.

---

This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
