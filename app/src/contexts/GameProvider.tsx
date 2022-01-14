import React, { createContext, useContext, useState, useMemo } from "react";
import { range } from "lodash";

import { processGuess, indexFromChar } from "src/lib/utils";
import wordList from "src/lib/legalWords";
import { useLocalStorage } from "src/lib/useLocalStorage";

export enum Status {
  DEFAULT = 0,
  OUT = 1,
  IN = 2,
}

interface LetterStatus {
  guessed: boolean;
  status: Status;
}

interface GuessEntry {
  guess: string;
  overlap: number;
}

export interface GameContextValue {
  target: string;
  letterStatuses: LetterStatus[];
  toggleLetter: (letter: string) => void;
  globalError: string | null;
  guesses: GuessEntry[];
  addGuess: (guess: string) => void;
  success: boolean;
  reset: () => void;
  clearAnnotations: () => void;
  revealed: boolean;
  setRevealed: React.Dispatch<React.SetStateAction<boolean>>;
}

function generateWord() {
  return wordList[
    Math.floor(Math.random() * wordList.length)
  ].word.toUpperCase();
}

function useProvideGame(): GameContextValue {
  const [target, setTarget] = useLocalStorage<string>("tgt", generateWord);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const initialLetterStatuses = range(0, 26).map((_i) => ({
    guessed: false,
    status: Status.DEFAULT,
  }));
  const [letterStatuses, setLetterStatuses] = useLocalStorage<LetterStatus[]>(
    "lts",
    initialLetterStatuses
  );

  const [guesses, setGuesses] = useLocalStorage<GuessEntry[]>("gs", []);
  const success = useMemo(
    () => guesses.length > 0 && guesses[guesses.length - 1].guess === target,
    [guesses, target]
  );

  const addGuess = (guess: string) => {
    const guessUpper = guess.toUpperCase();
    const { overlap, error: guessError } = processGuess(guessUpper, target);
    if (guessError) {
      setGlobalError(guessError);
    } else {
      setGlobalError(null);
      // copy current statuses
      let currStatuses = letterStatuses.slice();
      guess.split("").forEach((letter) => {
        currStatuses[indexFromChar(letter.toUpperCase())].guessed = true;
        setLetterStatuses(currStatuses);
        setGuesses([...guesses, { guess: guessUpper, overlap }]);
      });
    }
  };

  const toggleLetter = (char: string) => {
    const index = indexFromChar(char);
    var newStatus = letterStatuses.slice();
    const curr = letterStatuses[index];
    newStatus[index].status = (curr.status + 1) % 3;
    setLetterStatuses(newStatus);
  };

  const clearAnnotations = () => {
    const newLetterStatuses = letterStatuses.slice();
    newLetterStatuses.forEach((entry) => (entry.status = Status.DEFAULT));
    setLetterStatuses(newLetterStatuses);
  };

  const [revealed, setRevealed] = useLocalStorage<boolean>("rv", false);

  const reset = () => {
    const newWord = generateWord();
    setTarget(newWord);
    setGuesses([]);
    setLetterStatuses(initialLetterStatuses);
    setRevealed(false);
  };

  return {
    target,
    letterStatuses,
    toggleLetter,
    globalError,
    guesses,
    addGuess,
    success,
    reset,
    clearAnnotations,
    revealed,
    setRevealed,
  };
}

const GameContext = createContext<GameContextValue | null>(null);

export default function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useProvideGame();

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGame = (): GameContextValue => {
  const game = useContext(GameContext);
  if (game === null) {
    throw Error("Context value not provided!");
  }
  return game;
};
