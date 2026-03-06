import type { TechItem } from "../../data/tech";

interface Props {
  items: TechItem[];
}

export default function TechBubbles({ items }: Props) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 pb-24">
      {items.map((item, i) => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-2 bubble-float-alt"
          style={{
            animationDelay: `${(i % 5) * 0.4}s`,
            animationDuration: `${9 + (i % 4) * 1.5}s`,
          }}
          title={item.name}
        >
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full
                       bg-white/30 backdrop-blur-sm
                       border border-white/40
                       shadow-[0_4px_16px_rgba(74,158,255,0.1)]
                       flex items-center justify-center
                       hover:bg-white/50 hover:scale-110
                       transition-all duration-300"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <span className="text-xs md:text-sm text-text-muted text-center">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
