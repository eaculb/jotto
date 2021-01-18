import React, { useState } from "react";

interface Props {
  onSubmit: (guess: string) => void;
}

export default function GuessInput({ onSubmit }: Props) {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(value);
    event.preventDefault();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="guess-input"
        type="text"
        name="new-guess"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">
        Guess
      </button>
    </form>
  );
}
