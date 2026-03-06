import { useState, useRef, useEffect } from "react";
import type { TechItem } from "../../data/tech";

interface Props {
  items: TechItem[];
}

function TechBubble({ item, index }: { item: TechItem; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center gap-2 bubble-float-alt"
      style={{
        animationDelay: `${(index % 5) * 0.4}s`,
        animationDuration: `${9 + (index % 4) * 1.5}s`,
      }}
    >
      {/* bubble */}
      <div
        className="group relative w-20 h-20 md:w-28 md:h-28 rounded-full
                   bg-white/30 backdrop-blur-sm
                   border border-white/40
                   shadow-[0_4px_16px_rgba(74,158,255,0.1)]
                   flex items-center justify-center
                   hover:bg-white/50 hover:scale-110
                   transition-all duration-300 cursor-pointer md:cursor-default"
        onClick={() => setOpen((v) => !v)}
      >
        <img
          src={item.icon}
          alt={item.name}
          className="w-1/2 h-1/2 object-contain"
        />
        {/* PC tooltip */}
        {item.description && (
          <div
            className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2
                       px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm
                       border border-white/60 shadow-md
                       text-xs text-text-secondary whitespace-nowrap
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-200 pointer-events-none"
          >
            {item.description}
          </div>
        )}
      </div>

      <span className="text-xs md:text-sm text-text-muted text-center">
        {item.name}
      </span>

      {/* mobile popover */}
      {item.description && (
        <div
          className={`md:hidden absolute -top-8 left-1/2 -translate-x-1/2 z-20
                     px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm
                     border border-white/60 shadow-md
                     text-xs text-text-secondary whitespace-nowrap
                     transition-opacity duration-200
                     ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {item.description}
        </div>
      )}
    </div>
  );
}

export default function TechBubbles({ items }: Props) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 pt-10 pb-24">
      {items.map((item, i) => (
        <TechBubble key={item.name} item={item} index={i} />
      ))}
    </div>
  );
}
