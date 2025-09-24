"use client";

import React, { ElementType, useEffect, useMemo, useRef, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  startDelay?: number; // ms before starting once visible
  once?: boolean; // if true, only types once
  as?: ElementType; // element/component to render
  showCursor?: boolean;
  cursorClassName?: string;
}

/**
 * TypingText reveals text letter-by-letter once it becomes visible on screen.
 * - Uses IntersectionObserver to start the animation when in view.
 * - Supports custom element via `as` (e.g., "p", "h1").
 */
export default function TypingText({
  text,
  className,
  speed = 40,
  startDelay = 0,
  once = true,
  as = "span",
  showCursor = false,
  cursorClassName = "opacity-60",
}: TypingTextProps) {
  const [index, setIndex] = useState(once ? 0 : text.length);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(!once);
  const ref = useRef<HTMLSpanElement | null>(null);
  const Comp = as as ElementType;

  // Reset if text changes and not once
  useEffect(() => {
    if (!once) {
      setIndex(0);
      setStarted(false);
      setDone(false);
    }
  }, [text, once]);

  // Observe visibility
  useEffect(() => {
    if (done || started) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started, done]);

  // Typing effect
  useEffect(() => {
    if (!started || done) return;

    const startTimer = window.setTimeout(() => {
      const id = window.setInterval(() => {
        setIndex((prev) => {
          const next = Math.min(text.length, prev + 1);
          if (next === text.length) {
            window.clearInterval(id);
            setDone(true);
          }
          return next;
        });
      }, Math.max(8, speed));
    }, Math.max(0, startDelay));

    return () => window.clearTimeout(startTimer);
  }, [started, speed, startDelay, text.length, done]);

  const visible = useMemo(() => text.slice(0, index), [text, index]);

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      <Comp className={className} aria-label={text}>
        <span aria-hidden>{visible}</span>
        {showCursor && !done && (
          <span className={cursorClassName}>{"|"}</span>
        )}
      </Comp>
    </span>
  );
}
