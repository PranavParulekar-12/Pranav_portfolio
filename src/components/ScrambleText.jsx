import React, { useState } from "react";

const ScrambleText = ({ text, duration = 1000, small, className = "" }) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  // const symbols = "!@#$%^&*";

  const getCharSet = (char) => {
    if (lowercase.includes(char)) return small ? lowercase : alpha;
    if (alpha.includes(char)) return alpha;
    if (nums.includes(char)) return nums;
    // if (symbols.includes(char)) return symbols;
    return char; // Preserve spaces or unknown characters
  };

  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const startScramble = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    let scrambledText = text.split("");
    let iterations = -2;

    const interval = setInterval(() => {
      scrambledText = scrambledText.map((char, i) =>
        i < iterations
          ? text[i]
          : getCharSet(char)[
              Math.floor(Math.random() * getCharSet(char).length)
            ]
      );

      setDisplayText(scrambledText.join(""));

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
      iterations++;
    }, duration / text.length);
  };

  return (
    <span
      onMouseEnter={startScramble}
      className={`cursor-pointer ${className}`}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
