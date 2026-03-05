import { useState, useEffect } from "react";
import type { TechItem } from "../../data/tech";

interface Props {
  items: TechItem[];
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
  const cellW = 80 / cols;
  const cellH = 70 / rows;

  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: 10 + col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.5,
      y: 15 + row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.4,
      size: Math.random() * 16 + 56,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 4,
    };
  });
}

export default function TechBubbles({ items }: Props) {
  const [positions, setPositions] = useState<BubblePosition[]>([]);

  useEffect(() => {
    setPositions(generatePositions(items.length));
  }, [items.length]);

  return (
    <div className="flex flex-col items-center px-4 pb-24">
      <div className="relative w-full max-w-3xl h-[400px] md:h-[500px]">
        {items.map((item, i) => {
          const pos = positions[i];
          if (!pos) return null;
          return (
            <div
              key={item.name}
              className="absolute bubble-float-alt"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: pos.size,
                height: pos.size,
                transform: "translate(-50%, -50%)",
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`,
              }}
              title={item.name}
            >
              <div
                className="w-full h-full rounded-full
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
