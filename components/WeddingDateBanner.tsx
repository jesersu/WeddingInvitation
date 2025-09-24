import React from "react";
import Image from "next/image";

interface WeddingDateBannerProps {
  date?: string | Date; // e.g. "2026-06-20T16:00:00-05:00" or a Date
  dateText?: string;     // alternatively pass a pre-formatted string like "20 • Junio • 2026"
  backgroundSrc?: string; // default /bg-date.png in public
  subtitle?: string;
  coupleImageSrc?: string; // optional: circular photo at bottom center
  coupleImageAlt?: string;
}

function formatDate(input: string | Date): string {
  const d = typeof input === "string" ? new Date(input) : input;
  if (isNaN(d.getTime())) return "";
  const day = d.getDate();
  const month = d.toLocaleString(undefined, { month: "long" });
  const year = d.getFullYear();
  return `${day} • ${month.charAt(0).toUpperCase() + month.slice(1)} • ${year}`;
}

export default function WeddingDateBanner({
  date,
  dateText,
  backgroundSrc = "/bg-date.png",
  subtitle = "Fecha de la boda",
}: WeddingDateBannerProps) {
  const display = dateText ?? (date ? formatDate(date) : "");

  return (
    <section className="relative overflow-hidden -mt-16 w-screen max-w-none mx-[calc(50%-50vw)] rounded-none sm:w-full sm:max-w-full sm:mx-0 sm:rounded-2xl">
      {/* Background */}
      <div className="relative h-[220px] sm:h-[280px] md:h-[320px]">
        <Image src={backgroundSrc} alt="Roses date background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/50 to-white/20" />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center px-3">
        {/* On mobile, place text inside a soft translucent card for readability. On >=sm, show text directly over background. */}
        <div className="w-full max-w-[560px] text-center sm:bg-transparent sm:backdrop-blur-0 sm:shadow-none sm:border-0 sm:p-0 bg-white/85 backdrop-blur-sm shadow-lg border border-amber-900/10 rounded-xl px-4 py-4">
          {subtitle && (
            <p className="font-elegant text-terracotta text-sm sm:text-lg mb-1 sm:mb-2 tracking-wide">
              {subtitle}
            </p>
          )}
          <div className="font-script text-4xl sm:text-6xl md:text-7xl leading-tight text-terracotta drop-shadow">
            {display}
          </div>
        </div>
      </div>


    </section>
  );
}
