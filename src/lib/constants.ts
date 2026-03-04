export const TELEGRAM_URL = "https://t.me/GetVerse/355494";

export const STATS = [
  { value: "70+", label: "Apps Shipped" },
  { value: "6", label: "Verticals" },
  { value: "[X]", label: "Community Members" },
  { value: "100%", label: "Revenue to Contributors" },
] as const;

export const VERTICALS = [
  {
    name: "Crypto Education",
    description: "Learn blockchain fundamentals through interactive apps and courses.",
    appCount: "[X]",
    icon: "📚",
  },
  {
    name: "Onboarding",
    description: "Smooth entry points for new users into the crypto ecosystem.",
    appCount: "[X]",
    icon: "🚀",
  },
  {
    name: "Security Awareness",
    description: "Tools and training to keep users safe from scams and exploits.",
    appCount: "[X]",
    icon: "🛡️",
  },
  {
    name: "Community Building",
    description: "Apps that bring crypto communities together and grow engagement.",
    appCount: "[X]",
    icon: "🤝",
  },
  {
    name: "Games",
    description: "Fun, on-chain games that reward players and drive adoption.",
    appCount: "[X]",
    icon: "🎮",
  },
  {
    name: "DeFi",
    description: "Decentralized finance tools built for real users.",
    appCount: "[X]",
    icon: "💰",
  },
] as const;

export const STEPS = [
  { number: "01", title: "Pick a role", description: "Developer, designer, PM, content creator — there's a place for you." },
  { number: "02", title: "Join or form a team", description: "Find an existing project or pitch your own idea to the community." },
  { number: "03", title: "Build with Verse support", description: "Get resources, mentorship, and infrastructure from the Verse ecosystem." },
  { number: "04", title: "Ship and earn", description: "Launch your app and earn 100% of the revenue it generates." },
] as const;
