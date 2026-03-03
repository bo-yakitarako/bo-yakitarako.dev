import { useEffect, useState } from "react";

export function useScrollProgress(elementId: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = document.getElementById(elementId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const p = Math.max(0, Math.min(1, -rect.top / rect.height));
          setProgress(p);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId]);

  return progress;
}
