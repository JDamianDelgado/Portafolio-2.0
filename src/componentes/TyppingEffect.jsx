import { useState, useEffect } from "react";

export default function TypingEffect({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => [
          ...prev,
          text[index] === "\n" ? <br key={index} /> : text[index],
        ]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <h1 className="textEfect">{displayText}</h1>;
}
