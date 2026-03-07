export interface TechItem {
  name: string;
  icon: string;
  description?: string;
}

export const techItems: TechItem[] = [
  { name: "HTML", icon: "/images/tech/html.webp", description: "div祭りは嫌い" },
  { name: "CSS", icon: "/images/tech/css.webp", description: "ガチでムズい" },
  { name: "JavaScript", icon: "/images/tech/js.webp", description: "TSの基礎で大事" },
  { name: "TypeScript", icon: "/images/tech/ts.webp", description: "こればかり書いてます" },
  { name: "React", icon: "/images/tech/react.webp", description: "メイン領域です" },
  { name: "Next.js/Waku", icon: "/images/tech/next.webp", description: "RSCが好きです" },
  { name: "Astro", icon: "/images/tech/astro.webp", description: "このサイトはAstro産です" },
  { name: "PHP", icon: "/images/tech/php.webp", description: "最初のバックエンド言語" },
  { name: "Laravel", icon: "/images/tech/laravel.webp", description: "最初のバックエンドFW" },
  { name: "Codeigniter", icon: "/images/tech/codeigniter.webp", description: "これでテストやSQLを学んだ" },
  { name: "Ruby on Rails", icon: "/images/tech/rails.webp", description: "仕事でしか触ったことない" },
  { name: "SQL", icon: "/images/tech/sql.webp", description: "激ムズ" },
  { name: "C", icon: "/images/tech/c.webp", description: "大学で触った程度" },
  { name: "Java", icon: "/images/tech/java.webp", description: "私の原点。Bronzeレベル" },
  { name: "C#", icon: "/images/tech/csharp.webp", description: "大学時代にWPFアプリをちょっとだけ" },
  { name: "Python", icon: "/images/tech/python.webp", description: "あんまり好きじゃない" },
  { name: "Ubuntu", icon: "/images/tech/ubuntu.webp", description: "Debian系に染まった要因" },
  { name: "GCP", icon: "/images/tech/gcp.webp", description: "そこまで深くやれてない" },
  { name: "Supabase", icon: "/images/tech/supabase.webp", description: "仕事でも趣味でも" },
  { name: "Coolify", icon: "/images/tech/coolify.webp", description: "趣味でお世話になってます" },
];
