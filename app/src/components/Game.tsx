import React, { useState, useMemo } from "react";

import Guess from "./Guess";
import GuessInput from "./GuessInput";
import Sidebar from "./Sidebar";
import { processGuess, indexFromChar, legalWords } from "../utils";
import LetterGroup from "./LetterGroup";
import ResetGame from "./ResetGame";

export class LetterStatus {
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

function generateWord() {
  return legalWords[
    Math.floor(Math.random() * legalWords.length)
  ].toUpperCase();
}

interface GuessEntry {
  guess: string;
  overlap: number;
}

export default function Game() {
  let initialLetterStatuses: Array<LetterStatus> = [];
  for (let i = 0; i < 26; i++) {
    initialLetterStatuses.push(new LetterStatus());
  }

  const [word, setWord] = useState<string>(generateWord());
  const [guesses, setGuesses] = useState<GuessEntry[]>([]);
  const [letterStatuses, setLetterStatuses] = useState<LetterStatus[]>(
    initialLetterStatuses
  );
  const [error, setError] = useState<string | null>(null);

  const mostRecentGuess = useMemo(() => guesses[guesses.length - 1], [guesses]);

  const handleLetterClick = (char: string) => {
    const index = indexFromChar(char);
    var newStatus = letterStatuses.slice();
    newStatus[index].status = letterStatuses[index].getNextStatus();
    setLetterStatuses(newStatus);
  };

  const handleGuess = (guess: string) => {
    const guessUpper = guess.toUpperCase();
    const { overlap, error: guessError } = processGuess(guessUpper, word);
    if (guessError) {
      setError(guessError);
    } else {
      setError(null);
      let currStatuses = letterStatuses.slice();
      guess.split("").forEach((letter) => {
        currStatuses[indexFromChar(letter.toUpperCase())].guessed = true;
        setLetterStatuses(currStatuses);
        setGuesses([...guesses, { guess: guessUpper, overlap }]);
      });
    }
  };

  const reset = () => {
    setWord(generateWord());
    setGuesses([]);
    setLetterStatuses(initialLetterStatuses);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="game">
        <div className="game-left">
          <h2>Your Guesses</h2>
          <div className="confirmed-letters">{/*TODO: confirmed letters*/}</div>
          <div className="guesses">
            {guesses.map(({ guess, overlap }, ix) => (
              <Guess
                key={ix}
                word={guess}
                overlapCount={overlap}
                letterStatuses={letterStatuses}
                handleLetterClick={handleLetterClick}
              />
            ))}
          </div>
          <div className="interact">
            {word === mostRecentGuess?.guess ? (
              <ResetGame numGuesses={guesses.length} onReset={() => reset()} />
            ) : (
              <>
                <GuessInput onSubmit={(guess) => handleGuess(guess)} />
                {error && <div className="error">{error}</div>}
              </>
            )}
          </div>
        </div>
        <div className="game-right">
          <h3>Unused Letters:</h3>
          <div className="letter-pile">
            <LetterGroup
              letterStatuses={letterStatuses}
              shouldBeGuessed={false}
              handleClick={handleLetterClick}
            />
          </div>
          <h3>Used Letters:</h3>
          <div className="letter-pile">
            <LetterGroup
              letterStatuses={letterStatuses}
              shouldBeGuessed={true}
              handleClick={handleLetterClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
