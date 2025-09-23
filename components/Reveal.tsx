"use client";

import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface RevealProps {
  as?: React.ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** delay in ms for the whole wrapper */
  delay?: number;
  /** animation variant */
  variant?: "fade-up" | "fade" | "fade-down" | "scale";
  /** run only once (default true) */
  once?: boolean;
}

export function Reveal({
  as = "div",
  children,
  className = "",
  style,
  delay = 0,
  variant = "fade-up",
  once = true,
}: RevealProps) {
  const Comp: React.ElementType = as;
  const ref = useRef<Element | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const base = "transition-all duration-700 ease-out will-change-transform will-change-opacity";
  const hiddenMap: Record<NonNullable<RevealProps["variant"]>, string> = {
    "fade-up": "opacity-0 translate-y-6",
    "fade": "opacity-0",
    "fade-down": "opacity-0 -translate-y-6",
    "scale": "opacity-0 scale-95",
  };
  const showMap: Record<NonNullable<RevealProps["variant"]>, string> = {
    "fade-up": "opacity-100 translate-y-0",
    "fade": "opacity-100",
    "fade-down": "opacity-100 translate-y-0",
    "scale": "opacity-100 scale-100",
  };

  return (
    <Comp
      ref={ref as never}
      className={`${base} ${visible ? showMap[variant] : hiddenMap[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Comp>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  /** ms between each child's reveal */
  stagger?: number;
  /** starting delay before first child */
  baseDelay?: number;
  variant?: RevealProps["variant"];
  className?: string;
}

export function RevealGroup({ children, stagger = 120, baseDelay = 0, variant = "fade-up", className = "" }: RevealGroupProps) {
  const items = React.Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, idx) => (
        <Reveal key={idx} delay={baseDelay + idx * stagger} variant={variant}>
          {child as React.ReactElement}
        </Reveal>
      ))}
    </div>
  );
}
