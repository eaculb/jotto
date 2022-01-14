import wordList from "./legalWords";

function compareLetters(word1: string, word2: string) {
  var total = 0;
  for (var i = 0; i < word1.length; i++) {
    for (var j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        total++;
      }
    }
  }
  return total;
}

interface GuessResult {
  overlap: number;
  error?: string;
}

export function processGuess(guess: string, target: string): GuessResult {
  if (guess.length !== 5) {
    return {
      overlap: -1,
      error: "Guesses must be 5 letters long.",
    };
  }
  if (!wordList.includes(guess.toLowerCase())) {
    return {
      overlap: -1,
      error: `'${guess}' is not a legal Jotto word. Legal jotto words are English words that do not end in 's' and do not repeat any letters.`,
    };
  } else {
    return {
      overlap: compareLetters(guess, target),
    };
  }
}

const ALPHABET_START = 65;

export function charFromIndex(i: number) {
  return String.fromCharCode(i + ALPHABET_START);
}

export function indexFromChar(char: any) {
  return char.charCodeAt() - ALPHABET_START;
}

export interface DrawerGroupProps {
  open: boolean;
  toggle: () => void;
  onClose: () => void;
}
