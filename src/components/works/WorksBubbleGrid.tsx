import { useState, useEffect, useCallback } from "react";
import type { WorkItem } from "../../data/works";
import { navigate } from "astro:transitions/client";

interface Props {
  items: WorkItem[];
}

interface BubblePosition {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

function generatePositions(count: number): BubblePosition[] {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  const cellW = 70 / cols;
  const cellH = 60 / rows;

  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: 15 + col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.4,
      y: 10 + row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.3,
      size: Math.random() * 20 + 80,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 4,
    };
  });
}

export default function WorksBubbleGrid({ items }: Props) {
  const [positions, setPositions] = useState<BubblePosition[]>([]);

  useEffect(() => {
    setPositions(generatePositions(items.length));
  }, [items.length]);

  const handleClick = useCallback(
    async (workId: string, e: React.MouseEvent<HTMLButtonElement>) => {
      const bubble = e.currentTarget;
      bubble.classList.add("bubble-pop");
      await new Promise((resolve) => setTimeout(resolve, 350));
      navigate(`/works/${workId}`);
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-8">
        Works
      </h2>
      <div className="relative w-full max-w-4xl h-[400px] md:h-[500px]">
        {items.map((item, i) => {
          const pos = positions[i];
          if (!pos) return null;
          return (
            <button
              key={item.id}
              className="absolute bubble-float-alt cursor-pointer"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: pos.size,
                height: pos.size,
                transform: "translate(-50%, -50%)",
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`,
              }}
              onClick={(e) => handleClick(item.id, e)}
              aria-label={`${item.title} を見る`}
            >
              <div
                className="w-full h-full rounded-full
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
              <span className="block mt-2 text-xs text-text-muted text-center">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
