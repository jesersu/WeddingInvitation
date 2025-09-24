import React from "react";
import Image from "next/image";

interface FloralBackdropCardProps {
  backgroundSrc?: string; // path in /public, e.g. /floral-backdrop.jpg or .png
  title?: string;
  message?: string;
  children?: React.ReactNode; // optional custom content inside the card
  className?: string; // allow external positioning like negative margins
}

export default function FloralBackdropCard({
  backgroundSrc = "/floral-backdrop.jpg",
  title = "Mensaje especial",
  message = "Gracias por acompañarnos en este día tan especial.",
  children,
}: FloralBackdropCardProps) {
  return (
    <section className={`relative w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden -mt-18 md:-mt-16`}>
      {/* Background image */}
      <div className="relative h-[200px] sm:h-[200px] md:h-[300px]">
        <Image
          src={backgroundSrc}
          alt="Floral background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Floating card */}
      <div className="relative -mt-30 px-4 pb-6">

        <div className="mx-auto max-w-[400px] rounded-xl bg-white/95 backdrop-blur-sm shadow-xl border border-amber-900/10 p-6 sm:p-8 text-center">
          {title && (
            <h3 className="font-elegant text-2xl sm:text-3xl text-terracotta mb-2">{title}</h3>
          )}
          {message && (
            <p className="text-terracotta/80 leading-relaxed">
              {message}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
