"use client";

import { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Food";

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText.charAt(index));
        setIndex(index + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return text;
};

export default TypingEffect;
