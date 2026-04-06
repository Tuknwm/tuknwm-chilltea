"use client";

import { useRef, useEffect, useState } from "react";

interface LoaderProps {
  onFinish?: () => void;
  progress?: number;
}

export default function Loader({ onFinish, progress }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const emojiRef = useRef<HTMLSpanElement>(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;
    script.onload = () => {
      setGsapLoaded(true);
      const gsap = (window as any).gsap;
      if (gsap && overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    const gsap = (window as any).gsap;

    if (!gsap) {
      if (onFinish) onFinish();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    tl.to(emojiRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    tl.to(overlayRef.current, {
      opacity: 0,
      scale: 1.06,
      filter: "blur(12px)",
      duration: 1.1,
      delay: 0.3,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F0EFF4]"
      style={{ willChange: "opacity, transform, filter" }}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-contain z-0"
      >
        <source src="/animlogo.webm" type="video/webm" />
        <source src="/animlogo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {progress !== undefined && (
        <div className="relative z-10 text-black/60 font-light tracking-[0.2em] mt-[30vh] text-lg">
          {progress}%
        </div>
      )}

      <div className="absolute bottom-8 left-0 w-full flex justify-between px-8 md:px-12 z-20 pointer-events-none">
        <span className="text-black/40 font-bold tracking-[0.3em] text-sm md:text-base">
          TUKNWM
        </span>

        <span
          ref={emojiRef}
          className="text-black text-xl md:text-2xl font-sans opacity-0 translate-y-2"
        >
          ＞︿＜
        </span>
      </div>
    </div>
  );
}