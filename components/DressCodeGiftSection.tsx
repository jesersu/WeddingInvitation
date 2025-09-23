import React from "react";
import Image from "next/image";

interface DressCodeGiftSectionProps {
  backgroundSrc?: string; // optional floral/texture background
  circleTitle?: string; // e.g., "Código de Vestimenta"
  circleSubtitle?: string; // e.g., "ELEGANTE"
  circleIconSrc?: string; // silhouette of couple
  sealSrc?: string; // wax seal image
  giftTitle?: string; // e.g., "Sugerencia de regalo"
  giftIconSrc?: string; // gift icon
  giftMessage?: string; // message body
}

export default function DressCodeGiftSection({
  backgroundSrc = "/bg-roses-2.png",
  circleTitle = "Código de Vestimenta",
  circleSubtitle = "ELEGANTE",
  circleIconSrc = "/icon/COUPLE_DANCE.png",
  sealSrc = "/icon/WAX_SEAL.png",
  giftTitle = "Sugerencia de regalo",
  giftIconSrc = "/icon/GIFT.png",
  giftMessage = "¡Que nos acompañen es lo más importante! Y si está en tu disposición realizar una muestra de cariño estaremos muy agradecidos.",
}: DressCodeGiftSectionProps) {
  return (
    <section className="relative w-full overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)] sm:w-full sm:max-w-5xl sm:mx-auto">
      {/* Background layer */}
      <div className="relative h-[660px] sm:h-[720px] md:h-[760px]">
        {backgroundSrc && (
          <>
            <Image src={backgroundSrc} alt="Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-white/70" />
          </>
        )}
      </div>

      {/* Centered stack */}
      <div className="absolute inset-0 flex items-start justify-center pt-10 sm:pt-12 md:pt-14 px-4">
        <div className="w-full max-w-[720px] flex flex-col items-center">
          {/* Top circular badge */}
          <div className="relative">
            <div className="rounded-full bg-[#6b8593] text-white w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] shadow-xl flex flex-col items-center justify-center gap-3">
              <h3 className="font-ballet text-2xl sm:text-3xl md:text-4xl text-center px-6 leading-tight">{circleTitle}</h3>
              {circleIconSrc && (
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <Image src={circleIconSrc} alt="Icon" fill className="object-contain invert" />
                </div>
              )}
              <div className="uppercase tracking-wide text-sm sm:text-base md:text-lg">{circleSubtitle}</div>
            </div>
            {/* Wax seal overlapping */}
            {sealSrc && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-7 md:-bottom-8 drop-shadow-xl">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <Image src={sealSrc} alt="Sello" fill className="object-contain" />
                </div>
              </div>
            )}
          </div>

          {/* Gift suggestion card */}
          <div className="mt-12 sm:mt-14 md:mt-16 w-full flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-[24px] shadow-2xl border border-amber-900/10 w-[92%] sm:w-[86%] md:w-[80%]">
              <div className="p-6 sm:p-7 md:p-8 text-center text-amber-900">
                <h4 className="font-ballet text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">{giftTitle}</h4>
                {giftIconSrc && (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4">
                    <Image src={giftIconSrc} alt="Regalo" fill className="object-contain" />
                  </div>
                )}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-amber-900/90 max-w-[48ch] mx-auto">
                  {giftMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
