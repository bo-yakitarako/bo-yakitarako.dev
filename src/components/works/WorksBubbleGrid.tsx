import { useCallback } from "react";
import type { WorkItem } from "../../data/works";
import { navigate } from "astro:transitions/client";

interface Props {
  items: WorkItem[];
}

export default function WorksBubbleGrid({ items }: Props) {
  const handleClick = useCallback(
    async (workId: string, e: React.MouseEvent<HTMLButtonElement>) => {
      const bubble = e.currentTarget;
      bubble.classList.add("bubble-pop");
      await new Promise((resolve) => setTimeout(resolve, 350));
      navigate(`/works/${workId}`);
    },
    [],
  );

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 pt-10 pb-24">
      {items.map((item, i) => (
        <button
          key={item.id}
          className="flex flex-col items-center gap-2 bubble-float-alt cursor-pointer"
          style={{
            animationDelay: `${(i % 5) * 0.4}s`,
            animationDuration: `${9 + (i % 4) * 1.5}s`,
          }}
          onClick={(e) => handleClick(item.id, e)}
          aria-label={`${item.title} を見る`}
        >
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full
                       bg-white/30 backdrop-blur-sm
                       border border-white/40
                       shadow-[0_4px_20px_rgba(74,158,255,0.12)]
                       flex items-center justify-center
                       hover:bg-white/50 hover:scale-110
                       transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: `0 4px 20px ${item.color}20`,
            }}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-3/5 h-3/5 object-contain rounded-lg"
            />
          </div>
          <span className="text-xs md:text-sm text-text-muted text-center">
            {item.title}
          </span>
        </button>
      ))}
    </div>
  );
}
