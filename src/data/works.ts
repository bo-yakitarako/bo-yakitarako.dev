export interface WorkItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  platforms: ('web' | 'ios' | 'android' | 'desktop' | 'bot')[];
  url?: string;
  github?: string;
  color: string;
}

// TODO: にじえもが実データを入れる
export const workItems: WorkItem[] = [
  {
    id: "sample-app-1",
    title: "Sample App 1",
    description: "サンプルアプリケーションの説明がここに入ります。",
    icon: "/images/works/sample1.svg",
    platforms: ["web"],
    color: "#4a9eff",
    github: "https://github.com/bo-yakitarako/ahoshine",
    url: "https://ahoshine.bo-yakitarako.dev",
  },
  {
    id: "sample-app-2",
    title: "Sample App 2",
    description: "サンプルアプリケーション2の説明がここに入ります。",
    icon: "/images/works/sample2.svg",
    platforms: ["web", "ios"],
    color: "#8b5cf6",
  },
  {
    id: "sample-app-3",
    title: "Sample App 3",
    description: "サンプルアプリケーション3の説明がここに入ります。",
    icon: "/images/works/sample3.svg",
    platforms: ["web"],
    color: "#22d3ee",
  },
];
