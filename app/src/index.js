import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const legalWords = require('./legalWords')

// The letter button object. 
//
// Props:
//  -value: The character value
//  -status: Boolean (or null) representing whether the letter has
//           been marked as a definite yes, no, or neither 
class Letter extends React.Component {
  render() {
    const status = this.props.status;
    var className = ''
    if (status === true) {
      className = 'letter-yes'
    } else if (status === false) {
      className = 'letter-no'
    } else {
      className = 'letter'
    }
    return (
      <button
        className={className}
        onClick={() => { this.props.onLetterClick(this.props.value) }}
      >
        {this.props.value}
      </button>
    );
  }
}

// The guess object. 
//
// Props:
//  -value: The guessed word
//  -letterStatus: state array of letter statuses passed from game

class Guess extends React.Component {
  renderLetter(char) {
    return (
      <Letter
        value={char}
        status={this.props.letterStatus[charCodeSimple(char)]}
        onLetterClick={(char) => { this.props.handleLetterClick(char) }}
      />
    );
  }

  render() {
    const [c0, c1, c2, c3, c4] = this.props.word.toUpperCase();
    return (
      <div className="guess">
        {this.renderLetter(c0)}
        {this.renderLetter(c1)}
        {this.renderLetter(c2)}
        {this.renderLetter(c3)}
        {this.renderLetter(c4)}
        {this.props.number}
      </div>
    );
  }
}

class GuessInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.onSubmit(event, this.state.value, this)}>
        <div>
          <input
            type="text"
            name="new-guess"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Guess!" />
      </form>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    const word = legalWords[Math.floor(Math.random() * legalWords.length)].toUpperCase();
    super(props);
    this.state = {
      word: word,
      guesses: [],
      guessNumber: 0,
      letterStatus: Array(26).fill(null),
      guessed: Array(26).fill(false),
    };
  };

  renderAlphabet(guessed) {
    var letters = [];
    const charStart = 65;
    const charEnd = 91;
    for (var i = charStart; i < charEnd; i++) {
      if (this.state.guessed[i - charStart] === guessed) {
        let val = String.fromCharCode(i);
        letters.push(<div><Letter
          value={val}
          status={this.state.letterStatus[i - charStart]}
          onLetterClick={(char) => { this.handleLetterClick(char) }}
        /></div>)
      }
    }
    return (letters)
  }

  handleLetterClick(char) {
    var currState = this.state.letterStatus[charCodeSimple(char)];
    var newStatus = this.state.letterStatus.slice();
    const index = charCodeSimple(char);
    if (currState === true) {
      newStatus[index] = null;
    } else if (currState === false) {
      newStatus[index] = true;
    } else {
      newStatus[index] = false;
    }
    this.setState({
      letterStatus: newStatus
    });
  }

  handleGuess(event, guess, input) {
    var overlap = processGuess(guess, this.state.word);
    if (overlap < 0) {
      alert('\'' + guess + '\' is not a valid Jotto word.')
    } else {
      let currGuessed = this.state.guessed.slice();
      let upperGuess = guess.toUpperCase()
      for (let i = 0; i < upperGuess.length; i++) {
        currGuessed[charCodeSimple(upperGuess[i])] = true;
      }
      this.setState({
        guesses: this.state.guesses.concat([guess.toUpperCase()]),
        guessNumber: this.state.guessNumber + 1,
        guessed: currGuessed
      });
    }
    input.state.value = ''
    event.preventDefault();
  }

  renderGuesses() {
    var guesses = []
    for (let i = 0; i < this.state.guesses.length; i++) {
      let curr = this.state.guesses[i]
      guesses.push(<div><Guess
        word={curr}
        number={compareLetters(curr, this.state.word)}
        letterStatus={this.state.letterStatus}
        handleLetterClick={(char) => this.handleLetterClick(char)}
      /></div>)
    }
    return (guesses)
  }

  render() {
    const mostRecent = this.state.guesses[this.state.guesses.length - 1];
    const won = isMatch(this.state.word, mostRecent);

    let bottom;
    if (won) {
      bottom = "You guessed the word in " + this.state.guessNumber + " guesses!"
    } else {
      bottom = (
        <GuessInput
          onSubmit={(event, guess, input) => this.handleGuess(event, guess, input)}
        />
      );
    }
    return (
      <div className="game">
        <div className="game-left">
          <div className="confirmed-letters">

            {/*TODO: confirmed letters*/}
          </div>
          <div className="guesses">
            {this.renderGuesses()}
          </div>
          <div className="guess-input">
            {bottom}
          </div>
        </div>
        <div className="game-right">
          <div className="letter-pile">
            {this.renderAlphabet(false)}
          </div>
          <h3>Guessed Letters:</h3>
          <div className="letter-pile">
            {this.renderAlphabet(true)}
          </div>
        </div>
      </div>
    );
  }
}

function compareLetters(word1, word2) {
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

function processGuess(guess, target) {
  if (guess.length > 5 || !legalWords.includes(guess.toLowerCase())) {
    return -1;
  } else {
    return compareLetters(guess, target);
  }
}

function charCodeSimple(char) {
  return char.charCodeAt() - 65;
}

function isMatch(word1, word2) {
  return (word1 === word2);
}

// ===================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);