import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { range } from "lodash";

import { processGuess, indexFromChar, legalWords } from "../utils";

class LetterStatus {
  guessed: boolean;
  status?: boolean;

  constructor() {
    this.guessed = false;
  }

  getNextStatus() {
    if (this.status === true) {
      return undefined;
    } else if (this.status === false) {
      return true;
    } else {
      return false;
    }
  }
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
  return legalWords[
    Math.floor(Math.random() * legalWords.length)
  ].toUpperCase();
}

function useProvideGame(): GameContextValue {
  const [target, setTarget] = useState<string>(generateWord());
  const [globalError, setGlobalError] = useState<string | null>(null);

  const initialLetterStatuses = range(0, 26).map((_i) => new LetterStatus());
  const [letterStatuses, setLetterStatuses] = useState<LetterStatus[]>(
    initialLetterStatuses
  );

  const [guesses, setGuesses] = useState<GuessEntry[]>([]);
  const success = useMemo(
    () => guesses.length > 0 && guesses[guesses.length - 1].guess === target,
    [guesses, target]
  );
  const addGuess = useCallback(
    (guess: string) => {
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
    },
    [target, guesses, setGuesses, letterStatuses, setGlobalError]
  );

  const toggleLetter = (char: string) => {
    const index = indexFromChar(char);
    var newStatus = letterStatuses.slice();
    newStatus[index].status = letterStatuses[index].getNextStatus();
    setLetterStatuses(newStatus);
  };

  const clearAnnotations = () => {
    const newLetterStatuses = letterStatuses.slice();
    newLetterStatuses.forEach((entry) => (entry.status = undefined));
    setLetterStatuses(newLetterStatuses);
  };

  const [revealed, setRevealed] = useState<boolean>(false);

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

export const useGame = () => {
  return useContext(GameContext);
};
