import { useState, useEffect } from "react";

interface Props {
  sectionId: string;
  label: string;
}

export default function ScrollIndicator({ sectionId, label }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          // Show when section top is in the upper half of viewport
          // Hide after scrolling 200px past the section top
          setVisible(rect.top < vh * 0.5 && rect.top > -500);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionId]);

  const handleClick = () => {
    const target = document.getElementById(`section-${label}`);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + window.innerHeight * 0.25, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 text-center z-10
                 transition-opacity duration-500 cursor-pointer"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <span className="text-lg text-text-muted font-medium">{label}</span>
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
    </button>
  );
}
