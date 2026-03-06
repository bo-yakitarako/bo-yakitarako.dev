import { useState, useEffect } from "react";
import type { WorkItem } from "../../data/works";

interface Props {
  items: WorkItem[];
}

const platformLabels: Record<string, string> = {
  web: "🌐 Web",
  ios: "📱 iOS",
  android: "📱 Android",
  desktop: "🖥 Desktop",
  bot: "🤖 Bot",
};

function WorkModal({
  work,
  onClose,
}: {
  work: WorkItem;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    return () => {};
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-6
                  transition-all duration-200
                  ${visible ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"}`}
      onClick={handleClose}
    >
      <div
        className={`relative max-w-lg w-full rounded-2xl
                   bg-white/80 backdrop-blur-md border border-white/60
                   shadow-[0_16px_64px_rgba(74,158,255,0.15)]
                   p-6 md:p-8
                   transition-all duration-200
                   ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center
                     rounded-full text-text-muted hover:text-text-primary
                     hover:bg-white/50 transition-colors cursor-pointer"
          onClick={handleClose}
          aria-label="閉じる"
        >
          ✕
        </button>

        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          {/* icon */}
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full shrink-0
                       bg-white/30 backdrop-blur-sm border border-white/40
                       shadow-[0_8px_32px_rgba(74,158,255,0.1)]
                       flex items-center justify-center bubble-float"
            style={{
              animationDuration: "5s",
              boxShadow: `0 8px 32px ${work.color}15`,
            }}
          >
            <img
              src={work.icon}
              alt={work.title}
              className="w-3/5 h-3/5 object-contain"
            />
          </div>

          {/* content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
              {work.title}
            </h3>

            <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-4">
              {work.platforms.map((p) => (
                <span
                  key={p}
                  className="text-xs px-3 py-1 rounded-full bg-white/40
                             text-text-secondary border border-white/30"
                >
                  {platformLabels[p] ?? p}
                </span>
              ))}
            </div>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
              {work.description}
            </p>

            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                             bg-accent-blue/10 text-accent-blue text-sm font-medium
                             hover:bg-accent-blue/20 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {work.platforms.includes("bot") ? "Install Bot" : "Visit Site"}
                </a>
              )}
              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                             bg-white/40 text-text-secondary text-sm font-medium
                             hover:bg-white/60 transition-colors border border-white/30"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorksBubbleGrid({ items }: Props) {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 pb-24">
        {items.map((item, i) => (
          <button
            key={item.id}
            className="flex flex-col items-center gap-2 bubble-float-alt cursor-pointer"
            style={{
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${9 + (i % 4) * 1.5}s`,
            }}
            onClick={() => setSelected(item)}
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

      {selected && (
        <WorkModal work={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
