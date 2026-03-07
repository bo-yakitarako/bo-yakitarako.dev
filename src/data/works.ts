export interface WorkItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  platforms: ('web' | 'ios' | 'android' | 'desktop' | 'bot' | 'unavailable')[];
  url?: string;
  github?: string;
}

export interface WorkSection {
  title: string;
  items: WorkItem[];
}

// TODO: にじえもが実データを入れる
export const workSections: WorkSection[] = [
  {
    title: "Products",
    items: [
      {
        id: "sparabeat-rate-system",
        title: "Sparebeat Rate System",
        description: "最初に公開したWebアプリケーションです。\nブラウザ音楽ゲーム: Sparebeatの習熟度を定量化するレートシステムを作りました。\nレガシーHTML+CSS+JavaScriptとVanilla PHPで制作しており、今見るとかなり危うい設計です",
        icon: "/images/works/sparabeat_logo.png",
        platforms: ["web", "unavailable"],

      },
      {
        id: "sparebeat-grade-certification",
        title: "Sparebeat 段位認定",
        description: "ブラウザ音楽ゲーム: Sparebeatの段位認定システムです。\n当時はSparebeatからスコアデータを取得するAPIが公開されてなかったため、リザルト画像のスクリーンショットを提出してもらい、その画像をOCRで読み取りスコアを読み取ることで判定を行いました。",
        icon: "/images/works/sgc.png",
        platforms: ["web", "unavailable"],

      },
      {
        id: "sparebeat-map-editor",
        title: "Sparebeat Map Editor",
        description: "ブラウザ音楽ゲーム: Sparebeatの譜面を制作するためのツールで、唯一現存するSparebeatプロダクトです。\n2020年に大学の春休みを利用してReact/Reduxの基礎を学んだ後、2週間で作りました。\n作ったっきりノーメンテですが、今でも多くの方にお使いいただけているようです。",
        icon: "/images/works/sparabeat_logo.png",
        platforms: ["web"],
        url: "https://spbe.bo-yakitarako.dev",
        github: "https://github.com/bo-yakitarako/sparebeat-map-editor",

      },
      {
        id: "maze",
        title: "迷路遊びたーい",
        description: "迷路の生成アルゴリズムが面白かったので作りました。迷路が遊べます。",
        icon: "/images/avatar.webp",
        platforms: ["web"],
        url: "https://bo-yakitarako.github.io/maze/",
        github: "https://github.com/bo-yakitarako/maze",
      },
      {
        id: "maze-maker",
        title: "迷路を作らせよう",
        description: "迷路生成アルゴリズムを可視化するWebアプリです。\nだんだん穴を掘って迷路ができていく様子が面白いです。",
        icon: "/images/avatar.webp",
        platforms: ["web"],
        url: "https://bo-yakitarako.github.io/maze-maker/",
        github: "https://github.com/bo-yakitarako/maze-maker",
      },
      {
        id: "skullking-web",
        title: "Skullking",
        description: "大学の友人が就活のためにガクチカとして何かやりたいということで、スカルキングというボードゲームをWebで遊べるようにするアプリを共同制作しました。\nとはいえ、友人はアプリ開発の知見はほぼ無かったので友人はサーバーサイドの少しの部分を担当し、環境構築からフロントエンド部分、友人に開発しやすくしてもらうためのjestの整備やサーバーサイド部分の手直し、デプロイはbo-yakitarakoが行いました。9割以上bo-yakitarakoですｗ\nちなみに友人は無事内定をいただけたようです。",
        icon: "/images/works/skullking.ico",
        platforms: ["web", "unavailable"],
        github: "https://github.com/bo-yakitarako-dev/skullking",
      },
      {
        id: "distter",
        title: "distter",
        description: "discordに投稿した文章をTwitterにも投稿するというアプリです。\n配信者の方が各SNSに飛んで毎度同じ内容を投稿するのはめんどくさいということだったので制作いたしました。\nTwitter APIの扱いやSNS認証の学習になり、自分の身にもなりました。\nTwitter APIの有料化に伴い終了いたしました。",
        icon: "/images/works/distter.png",
        platforms: ["web", "unavailable"],
        github: "https://github.com/bo-yakitarako/distter",
      },
      {
        id: "youtube-chat-ranking",
        title: "YouTube Chat Ranking",
        description: "特定の配信者の方の過去の全配信のリスナー毎のチャット数をカウントし、チャット数でランキングを表示するというWindowsアプリです。ログイン不要で使えます。\nyt-dlpを使って過去のチャットをキャッシュし、youtubeのAPIを使って配信中はリアルタイムでチャット数を更新します。\n仕様変更の波にのまれて現在は使用不可能ですが、改修していきたいところ。\n初めてのElectronアプリでした。",
        icon: "/images/works/youtube_chat_ranking.png",
        platforms: ["desktop", "unavailable"],
        github: "https://github.com/bo-yakitarako/youtube-chat-ranking",
      },
      {
        id: "dakoku",
        title: "dakoku",
        description: "業務委託で働く際に働いてる時間知りてえなと思ったけどいい感じの打刻アプリが無かったので自作しました。シンプルな打刻タイマーです。\n仕事が複数あっても仕事ごとのタイマーが取れたり、カレンダー機能によりその月の稼働時間が一目で見れたり、いつ稼働していつ休憩したかなどのその日の詳細もグラフで見やすく表示したりします。\nマルチデバイス対応のため現在クライアント依存から認証サーバー化を進めています。",
        icon: "/images/works/dakoku.png",
        platforms: ["desktop"],
        github: "https://github.com/bo-yakitarako/dakoku",
        url: "https://github.com/bo-yakitarako/dakoku/releases/tag/windows",
      },
      {
        id: "shadow-corridor-mapping",
        title: "しゃどこりマッピングしたくねー？",
        description: "ホラーゲーム: シャドーコリドーのマップを覚えるために作りました。\n攻略サイトは他に既にあるのですが、今絶賛プレイ中の回廊ステージの構造を知りながらできたほうが絶対良いと思い、実際に作って活用していました。\n他にも配信者の方の配信を見ながらこのマッピングで状況を常に整理しながら見るとその配信の楽しさがかなり増してグッドです。\n静的サイトですが、無駄に自宅サーバーにデプロイしています。",
        icon: "/images/avatar.webp",
        platforms: ["web"],
        github: "https://github.com/bo-yakitarako/shadow-corridor-mapping",
        url: "https://scm.bo-yakitarako.dev",
      },
    ],
  },
  {
    title: "Disord Bots",
    items: [
      {
        id: "skullking-discord",
        title: "Skullking (bot版)",
        description: "ボードゲーム: スカルキングをdiscord上で遊べるようにしたものです。\n友人とレストランの待ち時間に遊ぶのにちょうど良く、かなり好評でした。\nWeb版のスカルキングよりこっちが先で、こちらはbo-yakitarakoが1人で作成しています。",
        icon: "/images/works/discord/skullking.png",
        platforms: ["bot"],
        github: "https://github.com/bo-yakitarako/skullking-discord",
        url: "https://discord.com/oauth2/authorize?client_id=952453991583858689&permissions=1099780155408&integration_type=0&scope=bot",
      },
      {
        id: "yoshida",
        title: "1%の確率で吉田になるおみくじbot",
        description: "「大吉」「中吉」「吉」...「吉田」もあるやん！という安易な発想で生まれたおみくじbotです。\nアイコン画像はバリバリ著作権違反な気がするけど蛙男商会様お許しください。\n数年前に1度作ったものを放置していたのですが、2025年に改めて作り直しました。\n毎日0時に日付が変わるタイミングで設定したチャンネルに自動でおみくじボタンが通知され、1日1回のおみくじが引けます。\nずいぶん前にリリースしましたが、未だに知人・友人にお使いいただいており、かなり好評なbotです。",
        icon: "/images/works/discord/yoshida.png",
        platforms: ["bot"],
        github: "https://github.com/bo-yakitarako/yoshida-omikuji",
        url: "https://discord.com/oauth2/authorize?client_id=718710252261867590&permissions=18432&integration_type=0&scope=bot",
      },
      {
        id: "coyote",
        title: "コヨーテ",
        description: "ボードゲーム: コヨーテをdiscord上で遊べるようにしたものです。",
        icon: "/images/works/discord/coyote.png",
        platforms: ["bot"],
        github: "https://github.com/bo-yakitarako/coyote",
        url: "https://discord.com/oauth2/authorize?client_id=854295456195543040&permissions=83968&integration_type=0&scope=bot",
      },
      {
        id: "ito",
        title: "ito",
        description: "itoが遊びたい！という要望を聞き、作りました。\nルールは知りませんでしたが、なんとか遊べるレベルに実装できるルールで良かったです。",
        icon: "/images/works/discord/ito.png",
        platforms: ["bot"],
        github: "https://github.com/bo-yakitarako/ito",
        url: "https://discord.com/oauth2/authorize?client_id=1400787988333592576&permissions=18432&integration_type=0&scope=bot",
      },
      {
        id: "geier",
        title: "ハゲタカのえじき",
        description: "こちらもitoと同様に、ハゲタカのえじきが遊びたい！という要望を聞き、作りました。\n1日で完成したくらい単純なルールですが、これで面白いんだからすごい。",
        icon: "/images/works/discord/geier.png",
        platforms: ["bot"],
        github: "https://github.com/bo-yakitarako/geier",
        url: "https://discord.com/oauth2/authorize?client_id=1393709231055569008&permissions=83968&integration_type=0&scope=bot",
      },
      {
        id: "wordwolf",
        title: "語狼",
        description: "結構ボドゲのbot作ってきたのにワードウルフ無くね？となったので作りました。\ndiscordの通話らしくbotが残り秒数を読み上げて、投票タイムは参加者全員をサーバーミュートにして議論を強制的に遮断する仕組みができました。\nワードウルフとしてかなり遊びやすいと思います。",
        icon: "/images/works/discord/wordwolf.png",
        platforms: ["bot"],
        github: "https://github.com/bo-yakitarako/wordwolf",
        url: "https://discord.com/oauth2/authorize?client_id=1437743521275580506&permissions=292776976&integration_type=0&scope=bot",
      },
    ],
  },
];
