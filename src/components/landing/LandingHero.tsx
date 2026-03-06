import { useEffect, useState } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import ScrollIndicator from "../global/ScrollIndicator";

export default function LandingHero() {
  const progress = useScrollProgress("section-top");
  const [entered, setEntered] = useState(false);
  const textOpacity = Math.max(0, 1 - progress * 6);
  const heroOpacity = Math.max(0, 1 - progress * 5);
  const heroY = -progress * 120;

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-dvh">
      <div
        className="flex flex-col items-center z-10 transition-all duration-1000 ease-out"
        style={{
          opacity: entered ? heroOpacity : 0,
          transform: `translateY(${entered ? heroY - 24 : heroY - 4}px)`,
          willChange: "transform, opacity",
        }}
      >
        {/* avatar bubble */}
        <div
          className="w-44 h-44 md:w-64 md:h-64 rounded-full shrink-0 aspect-square
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
            src="/images/avatar.webp"
            alt="bo-yakitarako"
            className="w-3/4 h-3/4 rounded-full object-cover"
          />
        </div>

        {/* title text */}
        <div
          className="mt-4 text-center"
          style={{ opacity: textOpacity }}
        >
          <h1 className="text-3xl md:text-5xl text-text-primary tracking-tight">
            bo-yakitarako.dev
          </h1>
        </div>
      </div>

      <ScrollIndicator sectionId="section-top" label="about" hideOffset={[200, 100]} />
    </div>
  );
}
