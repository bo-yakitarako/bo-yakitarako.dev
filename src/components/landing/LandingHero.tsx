import { useState, useEffect } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function LandingHero() {
  const progress = useScrollProgress("section-top");
  const [windowWidth, setWindowWidth] = useState(800);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const textOpacity = Math.max(0, 1 - progress * 4);
  const avatarScale = 1 - progress * 0.6;
  const avatarY = -progress * 200;
  const avatarX = progress * -(windowWidth / 2 - 60);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="flex flex-col items-center z-10"
        style={{
          transform: `translate(${avatarX}px, ${avatarY}px) scale(${avatarScale})`,
          willChange: "transform",
        }}
      >
        {/* avatar bubble */}
        <div
          className="w-36 h-36 md:w-48 md:h-48 rounded-full
                     bg-white/30 backdrop-blur-sm border-2 border-white/40
                     shadow-[0_8px_32px_rgba(74,158,255,0.15)]
                     flex items-center justify-center
                     bubble-float"
          style={{
            viewTransitionName: "avatar",
            animationDuration: "5s",
          }}
        >
          <img
            src="/images/avatar.svg"
            alt="bo-yakitarako"
            className="w-3/4 h-3/4 rounded-full object-cover"
          />
        </div>

        {/* title text */}
        <div
          className="mt-6 text-center"
          style={{ opacity: textOpacity }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-text-primary tracking-tight">
            bo-yakitarako.dev
          </h1>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-10"
        style={{ opacity: textOpacity }}
      >
        <span className="text-sm text-text-muted font-medium">about</span>
        <div className="mt-2 bounce-arrow">
          <svg
            className="w-5 h-5 mx-auto text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
