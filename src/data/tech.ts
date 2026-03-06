export interface TechItem {
  name: string;
  icon: string;
}

// TODO: にじえもが実際の技術スタックを入れる
// アイコンは public/images/tech/ に SVG を配置
export const techItems: TechItem[] = [
  { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  { name: "React", icon: "/images/tech/react.svg" },
  { name: "Astro", icon: "/images/tech/astro.svg" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwindcss.svg" },
  { name: "Vue.js", icon: "/images/tech/vuejs.svg" },
];
