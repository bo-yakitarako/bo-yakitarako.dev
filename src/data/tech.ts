export interface TechItem {
  name: string;
  icon: string;
  description?: string;
}

// TODO: にじえもが実際の技術スタックを入れる
// アイコンは public/images/tech/ に SVG を配置
export const techItems: TechItem[] = [
  { name: "TypeScript", icon: "/images/tech/typescript.svg", description: "メインの開発言語" },
  { name: "React", icon: "/images/tech/react.svg", description: "UIコンポーネント構築" },
  { name: "Astro", icon: "/images/tech/astro.svg", description: "このサイトのフレームワーク" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg", description: "サーバーサイド開発" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwindcss.svg", description: "スタイリング" },
  { name: "Vue.js", icon: "/images/tech/vuejs.svg", description: "業務で使用" },
];
