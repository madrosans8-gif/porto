const Model = {
  githubUser: "pikar2019",
  contactEmail: "madrosans8@gmail.com",
  state: { screen: "home", menuIndex: 0, reposLoaded: false, skillsBuilt: false },

  featured: [
    {
      title: "Wangsap — Open Commission to wangsap",
      tag: "Wangsap · Pikar", color: "#e60012", live: true,
      url: "https://wa.me/6283192063661", cta: "Tekan Woi →",
      img: "assets/projects/kuracash.png",
      desc: "Edit video rawfx, aesthetic, dll. rawfx bertema mobile legends atau anime/AMV. dan aesthetic Mobile Legends atau anime/AMV.",
    },
    {
      title: "Tiktok (Go + Tiktok)",
      tag: "Tiktok", color: "#3dff6e",
      url: "https://www.tiktok.com/@pikarv7", cta: "Tekan Woi",
      img: "assets/projects/wabot.png",
      desc: "Aplikasi tiktok untuk upload video yang telah saya edit di alight motion, serta untuk mencari referensi saya untuk ngedit, dan mencari footage untuk saya edit"
    },
    {
      title: "Discord Music Bot — Meoowy#5249",
      tag: "Discord · Node.js", color: "#f1e05a",
      url: "https://github.com/kurak2012", cta: "View on GitHub →",
      img: "assets/projects/meoowy.png",
      desc: "Bot musik Discord dengan Lavalink v4 + LavaSrc. Autoplay radio via Deezer relation graph, SoundCloud fallback, Hi-Fi EQ, queue management. Live di server Discord 200+ user.",
    },
    {
      title: "9Router — Self-Hosted AI Gateway",
      tag: "Infrastructure · AI", color: "#3178c6",
      url: "https://github.com/kurak2012", cta: "View on GitHub →",
      img: "assets/projects/9router.png",
      desc: "Gateway AI model self-hosted: 700+ koneksi Mistral, MiniMax, TwinMind, Meta Muse, Gemini. Load balancing otomatis, token rotation, dan auto-injection via SQLite.",
    },
  ],

  featuredRepoNames: [],
  fallbackRepos: [],
  projectImages: {},

  langColors: {
    JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
    Go: "#00ADD8", PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", Shell: "#89e051", Dockerfile: "#384d54",
  },

  skills: [
    { group: "Backend & Bot Development", items: [
      ["Go (whatsmeow · REST API)", 85],
      ["Node.js · Discord.js", 82],
      ["Python · Automation & Scripting", 80],
      ["WebSocket & SSE Streaming", 75],
      ["Cloudflare Workers (JS)", 78],
    ]},
    { group: "Infrastructure & DevOps", items: [
      ["VPS Linux (Ubuntu) Administration", 88],
      ["Docker · Pterodactyl Panel", 85],
      ["Nginx · Reverse Proxy · SSL/TLS", 83],
      ["Cloudflare DNS · Email Routing · CDN", 87],
      ["Systemd · Service Management", 80],
    ]},
    { group: "AI & LLM Integration", items: [
      ["OpenAI-Compatible API Integration", 85],
      ["LLM Gateway Management (9Router)", 83],
      ["Firebase Auth & Token Lifecycle", 78],
      ["Multi-provider Model Routing", 82],
      ["Prompt Engineering", 80],
    ]},
    { group: "Business & Platform", items: [
      ["Topup Game Platform (KuraCash)", 88],
      ["Payment Gateway Integration", 75],
      ["WhatsApp Business Automation", 84],
      ["Cloudflare Workers Deploy & KV", 80],
    ]},
  ],

  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames);
    try {
      const res = await fetch(`https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`);
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name)), live: false };
    }
  },
};
