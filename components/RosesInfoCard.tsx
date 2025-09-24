import React from "react";
import Image from "next/image";

interface Section {
  heading: string;
  items: string[];
}

interface RosesInfoCardProps {
  backgroundSrc?: string;         // roses background image in /public
  topIconSrc?: string;            // small line-art couple icon at top
  cornerTopLeftSrc?: string;      // optional corner rose
  cornerBottomRightSrc?: string;  // optional corner rose
  intro?: string;                 // intro line under the icon
  sections?: Section[];           // content groups
}

export default function RosesInfoCard({
  backgroundSrc = "/bg-roses-2.png",
  topIconSrc = "/icon-couple-line.png",
  cornerTopLeftSrc = "/corner-rose-tl.png",
  cornerBottomRightSrc = "/corner-rose-br.png",
  intro = "Con la bendición de nuestros padres",
  sections = [
    {
      heading: "PADRES DEL NOVIO",
      items: ["Nombre del Padre", "Nombre de la Madre"],
    },
    {
      heading: "PADRES DE LA NOVIA",
      items: ["Nombre del Padre", "Nombre de la Madre"],
    },
  ],
}: RosesInfoCardProps) {
  return (
    <section className="relative overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)] rounded-2xl shadow-sm sm:w-full sm:max-w-5xl sm:mx-auto sm:rounded-2xl -mt-20">
      {/* Background */}
      <div className="relative h-[680px] sm:h-[760px] md:h-[840px]">
        <Image src={backgroundSrc} alt="Roses background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-white/20" />
      </div>

      {/* Floating paper card */}
      <div className="absolute inset-0 flex items-center justify-center border-amber-900/10 p-4 -mt-16">
        <div className="relative w-full max-w-[250px] sm:max-w-[200px] md:max-w-[500px] bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-amber-900/10 px-4 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
          {/* Decorative corners (optional) */}
          {cornerTopLeftSrc && (
            <div className="absolute -top-6 -left-6 w-20 h-20 select-none pointer-events-none">
              <Image src={cornerTopLeftSrc} alt="decor TL" fill className="object-contain" />
            </div>
          )}
          {cornerBottomRightSrc && (
            <div className="absolute -bottom-6 -right-6 w-24 h-24 select-none pointer-events-none">
              <Image src={cornerBottomRightSrc} alt="decor BR" fill className="object-contain" />
            </div>
          )}

          {/* Top icon */}
          {topIconSrc && (
            <div className="mx-auto mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 text-amber-900/80">
              <Image src={topIconSrc} alt="Couple icon" width={80} height={80} className="w-full h-full object-contain" />
            </div>
          )}

          {/* Intro line */}
          <p className="text-center font-elegant text-terracotta text-lg sm:text-xl mb-4 sm:mb-6">
            {intro}
          </p>

          {/* Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((sec, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-elegant tracking-wide text-[18px] sm:text-[20px] text-green-800 mb-2">
                  {sec.heading}
                </h4>
                <div className="text-terracotta/90 space-y-1">
                  {sec.items.map((line, i) => (
                    <p key={i} className="font-elegant text-[16px] sm:text-[18px]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
