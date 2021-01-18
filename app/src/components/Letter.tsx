import React from "react";

interface Props {
  value: string;
  onLetterClick: (char: string) => void;
  status?: boolean;
}

export default function Letter({ status, onLetterClick, value, ...props }: Props) {
  var className = "letter";
  if (status === true) {
    className += " letter-yes";
  } else if (status === false) {
    className += " letter-no";
  }
  return (
    <button
      {...props}
      className={className}
      onClick={() => {
        onLetterClick(value);
      }}
    >
      {value}
    </button>
  );
}
