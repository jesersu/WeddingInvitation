import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GiftAndPlaylistCardProps {
  backgroundSrc?: string; // optional background behind the card
  titleGift?: string;
  giftIconSrc?: string;
  giftMessage?: string;
  giftCtaText?: string;
  giftCtaUrl?: string;

  titlePlaylist?: string;
  playlistMessage?: string;
  playlistCtaText?: string;
  playlistCtaUrl?: string;
}

export default function GiftAndPlaylistCard({
  backgroundSrc,
  titleGift = "Sugerencia de regalo",
  giftIconSrc = "/icon/GIFT.png",
  giftMessage = "¡Que nos acompañen es lo más importante! Y si está en tu disposición realizar una muestra de cariño estaremos muy agradecidos.",
  giftCtaText = "OPCIONES DE REGALO",
  giftCtaUrl = "#",
  titlePlaylist = "Playlist del evento",
  playlistMessage = "Queremos que nuestra fiesta tenga tu toque especial. Comparte con nosotros la canción que no puede faltar en nuestra boda.",
  playlistCtaText = "ELEGIR CANCIÓN",
  playlistCtaUrl = "#",
}: GiftAndPlaylistCardProps) {
  return (
    <section className="relative w-full flex items-center justify-center">
      {/* Optional background layer */}
      {backgroundSrc && (
        <div className="absolute inset-0 -z-10">
          <Image src={backgroundSrc} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Main card */}
      <div className="w-full max-w-[760px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-900/10 px-6 sm:px-10 py-8 sm:py-12">
        {/* Gift section */}
        <div className="text-center text-amber-900">
          <h3 className="font-ballet text-3xl sm:text-4xl text-[#5b7b51]">{titleGift}</h3>
          {giftIconSrc && (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto my-4">
              <Image src={giftIconSrc} alt="Gift icon" fill className="object-contain" />
            </div>
          )}
          <p className="max-w-[56ch] mx-auto text-base sm:text-lg leading-relaxed text-amber-900/90">
            {giftMessage}
          </p>
          {giftCtaUrl && (
            <Link
              href={giftCtaUrl}
              target={giftCtaUrl.startsWith("http") ? "_blank" : undefined}
              className="mt-6 inline-block rounded-full bg-[#5b7b51] text-white px-6 sm:px-8 py-3 shadow-md hover:bg-[#4b6a43] active:bg-[#3f5b39] transition-colors font-semibold tracking-wide"
            >
              {giftCtaText}
            </Link>
          )}
        </div>

        {/* Divider spacing */}
        <div className="h-10 sm:h-12" />

        {/* Playlist section */}
        <div className="text-center text-amber-900">
          <h3 className="font-ballet text-3xl sm:text-4xl text-[#5b7b51]">{titlePlaylist}</h3>
          <p className="max-w-[62ch] mx-auto text-base sm:text-lg leading-relaxed text-amber-900/90 mt-4">
            {playlistMessage}
          </p>
          {playlistCtaUrl && (
            <Link
              href={playlistCtaUrl}
              target={playlistCtaUrl.startsWith("http") ? "_blank" : undefined}
              className="mt-6 inline-block rounded-full bg-[#5b7b51] text-white px-6 sm:px-8 py-3 shadow-md hover:bg-[#4b6a43] active:bg-[#3f5b39] transition-colors font-semibold tracking-wide"
            >
              {playlistCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
