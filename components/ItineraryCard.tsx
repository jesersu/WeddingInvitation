import React from "react";
import Image from "next/image";
import { RevealGroup } from "./Reveal";

export interface ItineraryItem {
  time: string;
  label: string;
  iconSrc?: string; // path in /public
}

interface ItineraryCardProps {
  backgroundSrc?: string; // roses/flowers backdrop
  title?: string;
  leftItems: ItineraryItem[];  // items shown on left of the timeline (top to bottom)
  rightItems: ItineraryItem[]; // items shown on right of the timeline (top to bottom)
}

export default function ItineraryCard({
  backgroundSrc = "/bg-roses-2.png",
  title = "Itinerario",
  leftItems,
  rightItems,
}: ItineraryCardProps) {
  // Number of heart markers in the center, per design reference
  const markers = 6;

  return (
    <section className="relative w-full overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)] sm:w-full sm:max-w-5xl sm:mx-auto">
      {/* Background */}
      <div className="relative h-[720px] sm:h-[800px] md:h-[880px]">
        <Image src={backgroundSrc} alt="Roses background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Centered rounded card */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[300px] bg-white/95 backdrop-blur-sm rounded-[100px] shadow-2xl border border-terracotta px-4 sm:px-6 md:px-10 py-6 md:py-10">
          {/* Title */}
          <h3 className="text-center font-ballet text-3xl md:text-4xl text-terracotta mb-4 md:mb-6">{title}</h3>

          {/* Timeline layout */}
          <div className="relative grid grid-cols-[1fr_40px_1fr] gap-4 md:gap-6">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-terracotta/20" />

            {/* Left column */}
            <div className="space-y-8 md:space-y-10">
              <RevealGroup stagger={140}>
                {leftItems.map((item, idx) => (
                  <ItineraryEntry key={`L-${idx}`} side="left" index={idx} item={item} />
                ))}
              </RevealGroup>
            </div>

            {/* Markers column */}
            <div className="flex flex-col items-center justify-between py-2">
              {Array.from({ length: markers }).map((_, i) => (
                <HeartMarker key={i} />
              ))}
            </div>

            {/* Right column (staggered lower) */}
            <div className="space-y-8 md:space-y-10 mt-10 md:mt-5">
              <RevealGroup stagger={140} baseDelay={80}>
                {rightItems.map((item, idx) => (
                  <ItineraryEntry key={`R-${idx}`} side="right" index={idx} item={item} />
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ItineraryEntry({ side, item }: { side: "left" | "right"; index: number; item: ItineraryItem }) {
  return (
    <div className={`flex ${side === "left" ? "justify-end pr-2" : "justify-start pl-2"}`}>
      <div className={`flex flex-col gap-2 max-w-[240px] ${side === "left" ? "items-end text-right" : "items-start text-left"}`}>
        <EntryIcon src={item.iconSrc} />
        <div className="-mt-5">
          <div className="font-elegant text-terracotta text-base md:text-lg">{item.time}</div>
          <div className="text-terracotta/90 text-sm md:text-base">{item.label}</div>
        </div>
      </div>
    </div>
  );
}

function EntryIcon({ src }: { src?: string }) {
  if (!src) return <div className="w-12 h-12" />;
  return (
    <div className="relative w-15 h-15 md:w-18 md:h-18 shrink-0">
      <Image src={src} alt="icon" fill className="object-contain" />
    </div>
  );
}

function HeartMarker() {
  return (
    <div className="relative my-0">
      <div className="w-5 h-5 rounded-full bg-terracotta/20 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#a16207" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-6.72-4.35-9.33-7.3C.76 11.53 1.44 8.5 3.76 7.36A4.17 4.17 0 0 1 9 8.7 4.17 4.17 0 0 1 14.24 7.36c2.32 1.14 3 4.17.09 6.34C18.72 16.65 12 21 12 21z" />
        </svg>
      </div>
    </div>
  );
}
