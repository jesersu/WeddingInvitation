import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RevealGroup, Reveal } from "./Reveal";

interface ReceptionLocationCardProps {
  title?: string;
  backgroundSrc?: string; // roses/flowers backdrop
  time: string; // e.g., "6:40 pm"
  venueName: string; // e.g., "Salón Los Jardines"
  mapUrl: string; // Google Maps link
  iconSrc?: string; // path under /public for the reception icon
}

export default function ReceptionLocationCard({
  title = "Recepción",
  backgroundSrc = "/bg-roses-2.png",
  time,
  venueName,
  mapUrl,
  iconSrc = "/icons/reception.png",
}: ReceptionLocationCardProps) {
  return (
    <section className="relative w-full overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)] sm:w-full sm:max-w-5xl sm:mx-auto -mt-20">
      {/* Background */}
      <div className="relative h-[420px] sm:h-[480px] md:h-[520px]">
        <Image src={backgroundSrc} alt="Roses background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Centered floating card */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[720px] bg-white/95 backdrop-blur-sm rounded-[40px] shadow-2xl border border-terracotta px-6 md:px-10 py-6 md:py-8">
          <div className="flex flex-col items-center text-terracotta gap-3 md:gap-4">
            <RevealGroup stagger={120}>
              {/* Title */}
              <h3 className="font-ballet text-3xl md:text-4xl text-center">{title}</h3>

              {/* Icon */}
              {iconSrc ? (
                <div className="relative w-40 h-40 md:w-40 md:h-40 mx-auto">
                  <Image src={iconSrc} alt="Reception icon" fill className="object-contain" />
                </div>
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20" />
              )}

              {/* Time and Venue Name */}
              <div className="text-center">
                <div className="font-elegant text-xl md:text-2xl">{time}</div>
                <div className="font-semibold text-lg md:text-xl">{venueName}</div>
              </div>

              {/* Button */}
              <Reveal variant="fade-up" delay={80}>
                <Link
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-700 text-white px-5 py-2.5 shadow-md hover:bg-amber-800 active:bg-amber-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm md:text-base">Ver en Google Maps</span>
                </Link>
              </Reveal>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
