"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

// --------------------------------------------------------------------------
// BACKGROUND VIDEO CONFIGURATION:
// Put your video inside: webpage/public/videos/
// Example: if your file is named "my-video.mp4", place it at:
//   webpage/public/videos/my-video.mp4
// and change VIDEO_PATH below to: "/videos/my-video.mp4"
// --------------------------------------------------------------------------
export const BACKGROUND_VIDEO_PATH = "/videos/background-video.mp4";
export const BACKGROUND_FALLBACK_IMAGE = "/images/lorvish-background.png";

export function FixedBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // Trigger blur once scrolled past 60px from the top view
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure autoplay works across browsers
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy handled silently
      });
    }
  }, []);

  // Home page: NO blur on first view (top of page), but blur on scroll to prevent text overlapping.
  // Subpages: always blur to prevent text overlap.
  const shouldBlur = !isHome || isScrolled;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden"
    >
      {/* Background Graphic Fallback (visible while video loads or if video is not yet placed) */}
      <div
        className={`absolute inset-0 bg-[url('/images/lorvish-background.png')] bg-cover bg-center no-repeat transition-all duration-500 ease-out ${
          shouldBlur
            ? "-inset-6 blur-[12px] md:blur-[14px] scale-105 opacity-90"
            : "inset-0 blur-none scale-100 opacity-100"
        }`}
      />

      {/* Background Video Player */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={BACKGROUND_FALLBACK_IMAGE}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
          shouldBlur
            ? "blur-[12px] md:blur-[14px] scale-105 opacity-90"
            : "blur-none scale-100 opacity-100"
        }`}
      >
        <source src={BACKGROUND_VIDEO_PATH} type="video/mp4" />
        <source src={BACKGROUND_VIDEO_PATH.replace(/\.mp4$/i, ".webm")} type="video/webm" />
      </video>

      {/* Soft translucent veil when blurred so content never overlaps with background */}
      <div
        className={`absolute inset-0 bg-white/40 transition-opacity duration-500 ease-out ${
          shouldBlur ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
}
