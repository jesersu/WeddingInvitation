"use client";

import React from "react";

interface MusicPlayerProps {
  src: string; // e.g. /music/wedding.mp3 in public/
  title?: string;
  autoPlay?: boolean;
}

export default function MusicPlayer({ src, title = "Wedding Song", autoPlay = false }: MusicPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  React.useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setProgress(audio.currentTime || 0);
    const onEnd = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    if (autoPlay) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [src, autoPlay]);

  const play = () => {
    const a = audioRef.current;
    if (!a) return;
    a.play();
    setIsPlaying(true);
  };

  const pause = () => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const t = Number(e.target.value);
    a.currentTime = t;
    setProgress(t);
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div className="w-full max-w-[600px] mx-auto rounded-xl border border-amber-900/10 bg-white/80 backdrop-blur-sm shadow-md p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Decorative vinyl-like icon */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-rose-200 to-amber-100 border border-amber-900/10 shadow-inner">
            <div className="absolute inset-2 rounded-full border border-amber-900/10" />
          </div>
          <div>
            <p className="font-elegant text-amber-900 text-lg leading-none">{title}</p>
            <p className="text-amber-800/70 text-xs">{fmt(progress)} / {fmt(duration)}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Stop */}
          <button
            aria-label="Stop"
            onClick={stop}
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-900/10 bg-rose-50 hover:bg-rose-100 text-amber-900 shadow-sm transition"
          >
            {/* Stop icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
          </button>

          {/* Play / Pause */}
          {isPlaying ? (
            <button
              aria-label="Pause"
              onClick={pause}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-amber-900/10 bg-amber-100 hover:bg-amber-200 text-amber-900 shadow-sm transition"
            >
              {/* Pause icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
            </button>
          ) : (
            <button
              aria-label="Play"
              onClick={play}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-amber-900/10 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 shadow-sm transition"
            >
              {/* Play icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="mt-4 flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={Math.max(1, Math.floor(duration))}
          value={Math.floor(progress)}
          onChange={onSeek}
          className="w-full accent-amber-700"
        />
      </div>
    </div>
  );
}
