import React from "react";
import Image from "next/image";

interface CouplePhotoProps {
  src: string; // e.g. /couple.jpg in public
  alt?: string;
  caption?: string;
  rounded?: boolean;
}

export default function CouplePhoto({
  src,
  alt = "Nuestra foto",
  rounded = true,
}: CouplePhotoProps) {
  return (
    <section className="relative w-full max-w-5xl mx-auto -mt-16">
      {/* Frame background */}
      <div className="relative mx-auto w-full sm:w-[90%] md:w-[80%] aspect-[4/3] rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-amber-900/10 p-2 sm:p-3">
        <div className={`relative w-full h-full overflow-hidden ${rounded ? "rounded-xl" : "rounded-md"}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
          {/* subtle inner border */}
          <div className="absolute inset-0 pointer-events-none rounded-xl border border-white/40" />
        </div>
      </div>
    </section>
  );
}
