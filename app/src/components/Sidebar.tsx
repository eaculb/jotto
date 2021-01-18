import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Jotto</h1>
      <p>
        "Legal Jotto words" are five-letter words with no repeating letters and
        that do not end in "s." The computer will select a random legal Jotto
        word as a target. The user can make guesses consisting of other legal
        Jotto words. The program will inform the user how many letters are in
        common between the target word and guess word (independent of position).
        The goal is to guess the target word in the least possible number of
        guesses.
      </p>

      <h3>Rules of Jotto</h3>
      <p>
        "Legal Jotto words" are five-letter words with no repeating letters and
        that do not end in "s." The computer will select a random legal Jotto
        word as a target. The user can make guesses consisting of other legal
        Jotto words. The program will inform the user how many letters are in
        common between the target word and guess word (independent of position).
        The goal is to guess the target word in the least possible number of
        guesses.
      </p>

      <h3>Using the Interface</h3>
      <p>
        Letters can be marked as "sure no" (red) by clicking once and "sure yes"
        (green) by clicking twice. To reset, click a third time.
      </p>
    </div>
  );
}
