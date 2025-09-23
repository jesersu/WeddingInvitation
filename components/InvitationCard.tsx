import React from 'react';
import Image from 'next/image';

interface InvitationCardProps {
  title?: string;
  couple?: { bride: string; groom: string };
  subtitle?: string;
  topImageSrc?: string;      // defaults to /floral-top.png
  bottomImageSrc?: string;   // defaults to /floral-bottom.png
}

export default function InvitationCard({
  title = '¡Nos casamos!',
  couple = { bride: 'Prima', groom: 'Primo' },
  subtitle = 'y',
  topImageSrc = '/floral-top.png',
  bottomImageSrc = '/floral-bottom.png',
}: InvitationCardProps) {
  return (
    <div className="relative w-full max-w-[600px] aspect-[3/4] mx-auto rounded-xl shadow-xl overflow-hidden bg-white">
      {/* Paper-like texture */}
      <div className="absolute inset-0 card-paper" />

      {/* Top floral overlay */}
      <div className="absolute left-0 right-0 top-0 pointer-events-none select-none float-top z-10">
        <Image
          src={topImageSrc}
          alt="Top floral decoration"
          width={800}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Bottom floral overlay */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none select-none float-bottom z-10">
        <Image
          src={bottomImageSrc}
          alt="Bottom floral decoration"
          width={1200}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 items-stretch gap-2">
        {/* Row 1: Title (left) */}
        <p className="font-ballet text-[60px] text-amber-800/80 self-center text-center">
            {title}
        </p>

        <p className="font-script text-5xl md:text-6xl text-amber-900 self-center self-end text-right pr-20 float-bottom">
            {couple.groom}
        </p>

        {/* Row 2: Subtitle (center) */}
        <p className="font-ballet text-[60px] text-amber-800/80 self-center text-center">
            {subtitle}
        </p>

        {/* Row 3: Bride (right) */}
        <h1 className="font-script text-5xl md:text-6xl text-amber-900 float-top self-start text-left pl-20">
            {couple.bride}
        </h1>
        </div>

      {/* Subtle inner border to mimic print */}
      <div className="absolute inset-3 rounded-lg border border-black/5 pointer-events-none" />
    </div>
  );
}
