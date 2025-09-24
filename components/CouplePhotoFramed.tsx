import React from "react";
import Image from "next/image";
import { Reveal, RevealGroup } from "./Reveal";

interface CouplePhotoFramedProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
}

/**
 * Displays a photo with an elegant wedding-style frame.
 * Features: gilded gradient border, soft inner card, subtle shadow, rounded corners.
 */
export default function CouplePhotoFramed({ src, alt = "Pareja", caption, className = "" }: CouplePhotoFramedProps) {
  return (
    <section className={`w-full flex items-center justify-center ${className} -mt-1
    0`}>
      <div className="relative">
        {/* Ornate gradient frame */}
        <Reveal variant="scale">
          <div className="p-[3px] rounded-[36px] bg-[conic-gradient(at_50%_50%,#fef3c7_0deg,#f59e0b_120deg,#fef3c7_240deg,#f59e0b_360deg)] shadow-2xl">
          {/* Inner card */}
          <div className="rounded-[32px] bg-white/95 backdrop-blur-sm shadow-xl overflow-hidden">
            <RevealGroup stagger={120}>
              {/* Photo */}
              <div className="relative w-[720px] max-w-full aspect-[4/3]">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
              {/* Bottom bar with soft gradient */}
              <div className="bg-gradient-to-t from-amber-50 to-transparent p-4 text-center">
                {caption && (
                  <p className="text-terracotta font-medium">{caption}</p>
                )}
              </div>
            </RevealGroup>
          </div>
        </div>
        </Reveal>
        {/* Soft glow */}
        <Reveal variant="fade">
          <div className="absolute -inset-2 rounded-[40px] blur-2xl bg-amber-200/20 pointer-events-none" />
        </Reveal>
      </div>
    </section>
  );
}
