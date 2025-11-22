import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TextAnimation({
  texts = [],
  interval = 3000,
  typingSpeed = 80,
  className = ""
}) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const timeoutsRef = useRef([]);

  // Compute longest text for fixed constant width
  const maxLen = texts.length ? Math.max(...texts.map((t) => t.length)) : 0;

  // Fixed width to stop layout shifts
  const fixedWidthStyle = {
    width: `${maxLen}ch`,
    display: "inline-block",
    whiteSpace: "nowrap"
  };

  useEffect(() => {
    // Clear previous timers
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    if (!texts.length) {
      setDisplayed("");
      return;
    }

    const target = texts[index] ?? "";
    let i = 0;

    // Reset displayed text before typing
    setDisplayed("");

    // Letter by letter typing
    const typing = setInterval(() => {
      setDisplayed(target.slice(0, i + 1));
      i++;
      if (i === target.length) clearInterval(typing);
    }, typingSpeed);

    timeoutsRef.current.push(typing);

    // Switch after interval
    const switchTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    timeoutsRef.current.push(switchTimeout);

    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [index, interval, typingSpeed, texts]);

  // Slide direction
  const slideFrom = index % 2 === 0 ? -25 : 25;

  return (
    <motion.span
      key={index}
      initial={{ x: slideFrom, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={className}
      style={fixedWidthStyle}
    >
      {displayed}
    </motion.span>
  );
}
