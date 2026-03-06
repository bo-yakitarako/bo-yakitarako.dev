import { useState, useEffect } from "react";

interface Props {
  sectionId: string;
  title: string;
  icon?: string;
}

export default function StickyTitle({ sectionId, title, icon }: Props) {
  const [style, setStyle] = useState({ opacity: 1, transform: "none" });

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const vh = window.innerHeight;
          const stickyTop = vh * 0.10;
          // Distance from section bottom to the sticky position
          const distanceToEnd = rect.bottom - stickyTop;
          const fadeZone = 400;

          if (distanceToEnd < fadeZone && distanceToEnd > 0) {
            const progress = distanceToEnd / fadeZone;
            setStyle({
              opacity: progress,
              transform: `translateY(${(1 - progress) * -30}px)`,
            });
          } else if (distanceToEnd <= 0) {
            setStyle({ opacity: 0, transform: "translateY(-30px)" });
          } else {
            setStyle({ opacity: 1, transform: "none" });
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionId]);

  return (
    <div className="sticky top-0 z-10">
      <div className="absolute top-0 left-0 right-0 bottom-8 bg-bg" />
      <div className="h-[10vh]" />
      <div className="relative flex flex-col items-center pb-4" style={style}>
        {icon && (
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full
                       bg-white/30 backdrop-blur-sm border-2 border-white/40
                       shadow-[0_8px_32px_rgba(74,158,255,0.1)]
                       flex items-center justify-center
                       bubble-float mb-2"
            style={{ animationDuration: "5.5s" }}
          >
            <img
              src={icon}
              alt=""
              className="w-3/4 h-3/4 rounded-full object-cover"
            />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center">
          {title}
        </h2>
      </div>
      <div className="relative h-8 bg-linear-to-b from-bg to-transparent" style={{ opacity: style.opacity }} />
    </div>
  );
}
