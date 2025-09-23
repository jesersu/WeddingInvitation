"use client";

import React from "react";
import Image from "next/image";

interface WeddingCountdownProps {
  targetDate: string | Date; // e.g. "2025-12-20T16:00:00-05:00"
  backgroundSrc?: string;    // e.g. "/bg-roses-2.png" in /public
  title?: string;
}

function useCountdown(target: Date) {
  const [now, setNow] = React.useState<Date>(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const totalMs = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const seconds = Math.floor((totalMs / 1000) % 60);
  return { totalMs, days, hours, minutes, seconds };
}

export default function WeddingCountdown({
  targetDate,
  backgroundSrc = "/bg-roses-2.png",
  title = "Cuenta regresiva para la boda",
}: WeddingCountdownProps) {
  const target = React.useMemo(
    () => (typeof targetDate === "string" ? new Date(targetDate) : targetDate),
    [targetDate]
  );
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section className="relative w-full max-w-[600px] mx-auto overflow-hidden rounded-2xl -mt-16">
      {/* Background image */}
      <div className="relative h-[260px] sm:h-[300px] md:h-[360px]">
        <Image src={backgroundSrc} alt="Roses background" fill className="object-cover" priority />
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/50 to-white/20" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="font-elegant text-2xl md:text-3xl text-amber-900 mb-4 drop-shadow-sm">
          {title}
        </h3>
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          <TimeBox label="Días" value={days} />
          <TimeBox label="Horas" value={hours} />
          <TimeBox label="Min" value={minutes} />
          <TimeBox label="Seg" value={seconds} />
        </div>
      </div>
    </section>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-xl bg-white/90 backdrop-blur-sm shadow-xl border border-amber-900/10 flex flex-col items-center justify-center">
      <div className="font-script text-3xl sm:text-4xl md:text-5xl text-amber-900 leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-amber-800/80 text-xs sm:text-sm mt-1">{label}</div>
    </div>
  );
}
