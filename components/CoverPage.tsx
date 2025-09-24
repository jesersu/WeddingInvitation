"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CoverPageProps {
  coupleImageSrc?: string; // optional decorative image in the middle
  title?: string;
  subtitle?: string;
  rememberOpen?: boolean; // if true, persist open state in localStorage
  backgroundSrc?: string; // full-screen background image
}

/**
 * Full-screen cover with a curtain-open animation.
 * Renders on top of the page until the user presses OPEN.
 */
export default function CoverPage({
  coupleImageSrc = "/picture-1.png",
  title = "Nuestra Boda",
  subtitle = "Bienvenidos",
  rememberOpen = false,
  backgroundSrc = "/cover-page-1.jpg",
}: CoverPageProps) {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);

  // Restore persisted state
  useEffect(() => {
    if (!rememberOpen) return;
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("cover-opened");
    if (saved === "1") {
      setVisible(false);
    }
  }, [rememberOpen]);

  // Lock body scroll while visible
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (visible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [visible]);

  const onOpen = () => {
    setOpening(true);
    // After curtains open, hide the overlay
    window.setTimeout(() => {
      setVisible(false);
      if (rememberOpen) {
        try {
          window.localStorage.setItem("cover-opened", "1");
        } catch {}
      }
    }, 1200); // must match animation duration
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Perspective container */}
      <div className="absolute inset-0 page-perspective">
        {/* Page plane that flips open */}
        <div className={`absolute inset-0 page-plane bg-white/0 ${opening ? 'animate-page-flip' : ''}`}>
          {/* Background inside the flipping plane */}
          {backgroundSrc ? (
            <div className="absolute inset-0">
              <Image src={backgroundSrc} alt="Cover background" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-white/20" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-amber-50 to-white" />
          )}

          {/* Centered content on the plane */}
          <div className="relative h-full w-full grid place-items-center">
            <div className={`flex flex-col items-center gap-4 text-center px-6 ${opening ? 'animate-overlay-fade' : ''}`}>
              {subtitle && <p className="font-elegant text-terracotta/90 text-lg">{subtitle}</p>}
              <h1 className="font-ballet text-5xl sm:text-6xl text-terracotta drop-shadow">
                {title}
              </h1>

              {/* Floating couple image */}
              {coupleImageSrc && (
                <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] mt-2 animate-float-soft select-none">
                  <Image src={coupleImageSrc} alt="Pareja" fill className="object-contain" priority />
                </div>
              )}

              <button
                onClick={onOpen}
                className={`mt-6 inline-flex items-center justify-center rounded-full px-8 py-3 font-elegant tracking-wide text-lg text-white bg-terracotta shadow-lg shadow-amber-900/20 active:scale-[0.98] transition ${opening ? 'pointer-events-none opacity-80' : ''}`}
                aria-label="Abrir invitación"
              >
                Abrir Invitación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
