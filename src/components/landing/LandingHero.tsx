import { useState, useEffect } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import ScrollIndicator from "../global/ScrollIndicator";

export default function LandingHero() {
  const progress = useScrollProgress("section-top");
  const [vh, setVh] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const textOpacity = Math.max(0, 1 - progress * 6);
  const heroOpacity = Math.max(0, 1 - progress * 5);
  const heroY = -progress * 120;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: vh ? `${vh}px` : "100dvh" }}
    >
      <div
        className="flex flex-col items-center z-10"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroY - 24}px)`,
          willChange: "transform, opacity",
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

      <ScrollIndicator sectionId="section-top" label="about" />
    </div>
  );
}
