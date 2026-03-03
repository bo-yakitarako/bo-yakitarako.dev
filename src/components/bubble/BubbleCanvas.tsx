import { useEffect, useRef, useCallback } from "react";
import {
  type Bubble,
  createBubble,
  createBubbleInView,
  drawBubble,
  updateBubble,
} from "../../lib/bubbleEngine";

const MAX_BUBBLES = 35;
const INITIAL_BUBBLES = 15;
const SPAWN_RATE = 0.025;

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const frameRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < SPAWN_RATE && bubblesRef.current.length < MAX_BUBBLES) {
      bubblesRef.current.push(createBubble(canvas.width, canvas.height));
    }

    bubblesRef.current = bubblesRef.current.filter((bubble) => {
      const alive = updateBubble(bubble);
      if (alive) drawBubble(ctx, bubble);
      return alive;
    });

    frameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 初期泡を画面内にばらまく
    for (let i = 0; i < INITIAL_BUBBLES; i++) {
      bubblesRef.current.push(createBubbleInView(canvas.width, canvas.height));
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
