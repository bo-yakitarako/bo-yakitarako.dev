export interface CareerItem {
  period: string;
  title: string;
  role: string;
  description?: string;
  type: "work" | "education";
}

// TODO: にじえもが実データを入れる
export const careerItems: CareerItem[] = [
  {
    period: "20XX.04 - 現在",
    title: "株式会社サンプル",
    role: "フロントエンドエンジニア",
    description: "Web アプリケーション開発",
    type: "work",
  },
  {
    period: "20XX.04 - 20XX.03",
    title: "○○大学",
    role: "情報工学科",
    type: "education",
  },
];
