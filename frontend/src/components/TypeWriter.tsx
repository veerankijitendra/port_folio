import { useState, useEffect, memo } from "react";

const Typewriter = ({
  texts,
  speed = 100,
  delay = 2000,
}: {
  texts: string[];
  speed: number;
  delay: number;
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex(charIndex + 1), speed);
      } else {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }

    setDisplayedText(currentText.substring(0, charIndex));
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <h1 className="text-2xl font-bold">
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default memo(Typewriter);
