import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "./Reveal";

interface ConfirmAttendanceCardProps {
  backgroundSrc?: string; // floral/texture background behind the card
  title?: string;
  message?: string;
  deadline?: string; // e.g., "20 de Setiembre"
  buttonText?: string;
  buttonHref?: string;
  illustrationSrc?: string; // bottom line-art hands
}

export default function ConfirmAttendanceCard({
  backgroundSrc = "/bg-roses-2.png",
  title = "Confirma tu asistencia",
  message =
    "Tu presencia hará que este día sea aún más especial para nosotros. Por favor, confirma tu asistencia y acompáñanos en este momento tan importante.",
  deadline = "20 de Setiembre",
  buttonText = "CONFIRMAR",
  buttonHref = "#confirmar",
  illustrationSrc = "/icon/HOLDING_HANDS.png",
}: ConfirmAttendanceCardProps) {
  return (
    <section className="relative w-full overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)] sm:w-full sm:max-w-5xl sm:mx-auto">
      {/* Background layer */}
      <div className="relative h-[540px] sm:h-[580px] md:h-[620px]">
        {backgroundSrc && (
          <>
            <Image src={backgroundSrc} alt="Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-white/70" />
          </>
        )}
      </div>

      {/* Centered floating card */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[720px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-900/10 px-6 sm:px-10 py-8 sm:py-10">
          <div className="text-center text-amber-900">
            <RevealGroup stagger={120}>
              <h3 className="font-ballet text-3xl sm:text-4xl mb-3 sm:mb-4 text-amber-900/90">{title}</h3>
              <p className="max-w-[62ch] mx-auto text-base sm:text-lg leading-relaxed text-amber-900/90">
                {message}
                {deadline && (
                  <>
                    {" "}
                    <span className="block mt-2">Confirmar hasta el {deadline}</span>
                  </>
                )}
              </p>
            </RevealGroup>

            {/* CTA button */}
            <Reveal variant="fade-up" delay={160}>
              <div className="mt-6">
                <Link
                  href={buttonHref}
                  target={buttonHref.startsWith("http") ? "_blank" : undefined}
                  className="inline-block rounded-full bg-slate-700 text-white px-8 py-3 shadow-md hover:bg-slate-800 active:bg-slate-900 transition-colors font-semibold tracking-wide"
                >
                  {buttonText}
                </Link>
              </div>
            </Reveal>

            {/* Bottom line-art illustration */}
            {illustrationSrc && (
              <Reveal variant="fade-up" delay={220}>
                <div className="relative w-40 h-28 sm:w-48 sm:h-32 mx-auto mt-6 opacity-90">
                  <Image src={illustrationSrc} alt="Ilustración" fill className="object-contain" />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
