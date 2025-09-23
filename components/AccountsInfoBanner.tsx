import React from "react";
import Image from "next/image";
import { Reveal, RevealGroup } from "./Reveal";

interface AccountLine {
  label: string; // e.g., "BCP"
  value: string; // e.g., "XXXXXXXXX"
}

interface AccountsInfoBannerProps {
  title: string; // e.g., "IRINA"
  lines: AccountLine[];
  backgroundSrc?: string; // torn paper texture
  floralLeftSrc?: string; // left floral
  floralRightSrc?: string; // right floral
}

export default function AccountsInfoBanner({
  title,
  lines,
  backgroundSrc = "/bg-paper-blue.png",
  floralLeftSrc = "/floral-left.png",
  floralRightSrc = "/floral-right.png",
}: AccountsInfoBannerProps) {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-5xl">
        {/* Paper background */}
        <div className="relative overflow-hidden rounded-[28px] shadow-xl border border-amber-900/10">
          {/* If you have a torn paper image, it will show. Otherwise a soft gradient fallback. */}
          {backgroundSrc ? (
            <div className="relative h-full">
              <div className="relative w-full">
                <Image src={backgroundSrc} alt="Paper" width={2400} height={700} className="w-full h-auto" />
              </div>
            </div>
          ) : (
            <div className="bg-[radial-gradient(circle_at_30%_20%,#cbd5e1,transparent_40%),radial-gradient(circle_at_70%_80%,#94a3b8,transparent_40%)] bg-slate-200" />
          )}

          {/* Floral sides */}
          {floralLeftSrc && (
            <Reveal variant="fade-up">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-90">
                <div className="relative w-20 h-40 md:w-24 md:h-48">
                  <Image src={floralLeftSrc} alt="Floral left" fill className="object-contain" />
                </div>
              </div>
            </Reveal>
          )}
          {floralRightSrc && (
            <Reveal variant="fade-up" delay={80}>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-90">
                <div className="relative w-20 h-40 md:w-24 md:h-48">
                  <Image src={floralRightSrc} alt="Floral right" fill className="object-contain" />
                </div>
              </div>
            </Reveal>
          )}

          {/* Content */}
          <div className="absolute inset-0 grid place-items-center px-6 py-8">
            <div className="text-center text-amber-900">
              <Reveal variant="fade-down">
                <h3 className="font-ballet text-3xl md:text-4xl tracking-wide mb-2">{title}</h3>
              </Reveal>
              <RevealGroup stagger={90}>
                <div className="space-y-1 md:space-y-2 font-serif">
                  {lines.map((line, idx) => (
                    <p key={idx} className="text-base md:text-xl tracking-wide">
                      <span className="font-semibold">{line.label}</span>
                      <span className="mx-2">: </span>
                      <span className="underline decoration-amber-900/30 underline-offset-4">{line.value}</span>
                    </p>
                  ))}
                </div>
              </RevealGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
