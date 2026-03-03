export interface Bubble {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
}

export function createBubbleInView(
  canvasWidth: number,
  canvasHeight: number
): Bubble {
  const radius = Math.random() * 25 + 8;
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: -(Math.random() * 0.6 + 0.2),
    opacity: Math.random() * 0.2 + 0.1,
    hue: Math.random() * 60 + 190,
  };
}

export function createBubble(
  canvasWidth: number,
  canvasHeight: number
): Bubble {
  const radius = Math.random() * 25 + 8;
  return {
    x: Math.random() * canvasWidth,
    y: canvasHeight + radius,
    radius,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: -(Math.random() * 0.6 + 0.2),
    opacity: Math.random() * 0.2 + 0.1,
    hue: Math.random() * 60 + 190,
  };
}

export function drawBubble(ctx: CanvasRenderingContext2D, bubble: Bubble) {
  ctx.save();

  const gradient = ctx.createRadialGradient(
    bubble.x - bubble.radius * 0.3,
    bubble.y - bubble.radius * 0.3,
    bubble.radius * 0.1,
    bubble.x,
    bubble.y,
    bubble.radius
  );
  gradient.addColorStop(
    0,
    `hsla(${bubble.hue}, 70%, 85%, ${bubble.opacity * 2})`
  );
  gradient.addColorStop(
    0.6,
    `hsla(${bubble.hue}, 60%, 75%, ${bubble.opacity})`
  );
  gradient.addColorStop(1, `hsla(${bubble.hue}, 50%, 65%, 0)`);

  ctx.beginPath();
  ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  // highlight
  ctx.beginPath();
  ctx.arc(
    bubble.x - bubble.radius * 0.25,
    bubble.y - bubble.radius * 0.25,
    bubble.radius * 0.15,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 1.5})`;
  ctx.fill();

  ctx.restore();
}

export function updateBubble(bubble: Bubble): boolean {
  bubble.x += bubble.speedX;
  bubble.y += bubble.speedY;
  bubble.x += Math.sin(bubble.y * 0.008) * 0.2;
  return bubble.y + bubble.radius > -10;
}
