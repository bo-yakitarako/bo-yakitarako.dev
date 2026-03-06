export interface CareerItem {
  period: string;
  title: string;
  role: string;
  description?: string;
  type: "work" | "education";
  section?: string;
}

export const careerItems: CareerItem[] = [
  {
    section: "学生時代",
    period: "2013/04 - 2016/03",
    title: "宇都宮高校",
    role: "普通科",
    type: "education",
  },
  {
    period: "2017/04 - 2021/08",
    title: "千葉大学",
    role: "工学部 総合工学科 情報工学コース",
    description: "退学",
    type: "education",
  },
  {
    section: "社員時代",
    period: "2020/05 - 2023/02",
    title: "株式会社SocialDog",
    role: "React/PHPエンジニア",
    description: "2021/09より契約社員",
    type: "work",
  },
  {
    section: "失業保険時代",
    period: "2023/03 - 2023/09",
    title: "フードデリバリー配達員",
    role: "失業保険と配達員で生計",
    description: "時折趣味開発を進める",
    type: "work",
  },
  {
    section: "業務委託時代",
    period: "2023/10 - 2024/04",
    title: "TechTech inc.(仮)",
    role: "3件の小規模案件の開発",
    description: "知り合いの紹介にて仕事を行いました",
    type: "work",
  },
  {
    period: "2024/05 - 2024/08",
    title: "株式会社GNEX",
    role: "フロントエンドエンジニア",
    description: "自社プロダクトの開発",
    type: "work",
  },
  {
    period: "2024/09 - 2026/01",
    title: "株式会社Palett",
    role: "システム管理全般",
    description: "GNEXからの紹介",
    type: "work",
  },
  {
    period: "2026/02 - 現在",
    title: "株式会社Ceeglass",
    role: "複数のアプリの開発全般",
    description: "Palettからの紹介",
    type: "work",
  },
];
