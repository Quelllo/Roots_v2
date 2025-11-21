export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  year: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "urban-brew-rebrand",
    title: "Urban Brew",
    category: "Branding",
    description:
      "A complete brand refresh for a modern coffee chain, blending urban aesthetics with artisanal craft.",
    image: "/images/portfolio/urban-brew-hero.svg",
    client: "Urban Brew Coffee Co.",
    year: "2024",
    challenge:
      "Urban Brew needed to stand out in a saturated coffee market while maintaining their artisanal roots and appealing to a younger, urban demographic.",
    solution:
      "We developed a bold, minimalist brand identity that celebrates the craft of coffee making. The design system combines industrial elements with warm, inviting colors and custom typography.",
    results: [
      "42% increase in brand recognition",
      "28% growth in social media engagement",
      "Successful rollout across 15 locations",
      "Featured in Design Week Magazine",
    ],
    images: [
      "/images/portfolio/urban-brew-1.svg",
      "/images/portfolio/urban-brew-2.svg",
      "/images/portfolio/urban-brew-3.svg",
      "/images/portfolio/urban-brew-4.svg",
    ],
    tags: ["Branding", "Logo Design", "Packaging", "Print"],
  },
  {
    id: "2",
    slug: "nexus-app",
    title: "Nexus",
    category: "Digital",
    description:
      "An innovative fintech app that reimagines personal finance management for the mobile-first generation.",
    image: "/images/portfolio/nexus-hero.svg",
    client: "Nexus Financial",
    year: "2024",
    challenge:
      "Create an intuitive, visually engaging mobile experience that makes complex financial data accessible and actionable for users of all backgrounds.",
    solution:
      "We designed a clean, gesture-based interface with data visualization that turns numbers into insights. The app uses smart categorization and personalized recommendations.",
    results: [
      "50K+ downloads in first month",
      "4.8 star rating on app stores",
      "Featured by Apple as App of the Day",
      "35% daily active user rate",
    ],
    images: [
      "/images/portfolio/nexus-1.svg",
      "/images/portfolio/nexus-2.svg",
      "/images/portfolio/nexus-3.svg",
      "/images/portfolio/nexus-4.svg",
    ],
    tags: ["UI/UX", "Mobile App", "Fintech", "Digital Product"],
  },
  {
    id: "3",
    slug: "earthwise-campaign",
    title: "EarthWise",
    category: "Campaign",
    description:
      "A powerful environmental campaign that sparked conversations and drove action on sustainability.",
    image: "/images/portfolio/earthwise-hero.svg",
    client: "EarthWise Foundation",
    year: "2023",
    challenge:
      "Cut through climate fatigue and inspire meaningful action on environmental issues among a broad audience.",
    solution:
      "We created a multimedia campaign centered on personal stories and achievable actions. The visual identity uses bold typography and striking imagery.",
    results: [
      "2M+ social impressions",
      "15K petition signatures",
      "Partnership with 50+ organizations",
      "International Design Award",
    ],
    images: [
      "/images/portfolio/earthwise-1.svg",
      "/images/portfolio/earthwise-2.svg",
      "/images/portfolio/earthwise-3.svg",
      "/images/portfolio/earthwise-4.svg",
    ],
    tags: ["Campaign", "Social Impact", "Motion Graphics", "Digital"],
  },
  {
    id: "4",
    slug: "lumina-identity",
    title: "Lumina Hotels",
    category: "Branding",
    description:
      "Luxury hotel brand identity that captures the essence of modern elegance and timeless hospitality.",
    image: "/images/portfolio/lumina-hero.svg",
    client: "Lumina Hotel Group",
    year: "2023",
    challenge:
      "Create a sophisticated brand identity that appeals to luxury travelers while differentiating from established competitors.",
    solution:
      "We developed an elegant visual system inspired by light and space. The brand uses premium materials, refined typography, and a muted color palette.",
    results: [
      "Brand launched across 8 properties",
      "62% increase in direct bookings",
      "Featured in Hospitality Design",
      "Red Dot Design Award",
    ],
    images: [
      "/images/portfolio/lumina-1.svg",
      "/images/portfolio/lumina-2.svg",
      "/images/portfolio/lumina-3.svg",
      "/images/portfolio/lumina-4.svg",
    ],
    tags: ["Branding", "Luxury", "Print", "Signage"],
  },
  {
    id: "5",
    slug: "pulse-fitness",
    title: "Pulse Fitness",
    category: "Digital",
    description:
      "A dynamic website and app ecosystem for a fitness brand focused on community and results.",
    image: "/images/portfolio/pulse-hero.svg",
    client: "Pulse Fitness Studios",
    year: "2024",
    challenge:
      "Create a cohesive digital experience that motivates users, showcases community, and drives class bookings.",
    solution:
      "We built an energetic, performance-focused platform with seamless booking, progress tracking, and social features that celebrate achievements.",
    results: [
      "80% increase in online bookings",
      "45% improvement in user retention",
      "15K+ app downloads",
      "Awwwards Honorable Mention",
    ],
    images: [
      "/images/portfolio/pulse-1.svg",
      "/images/portfolio/pulse-2.svg",
      "/images/portfolio/pulse-3.svg",
      "/images/portfolio/pulse-4.svg",
    ],
    tags: ["Website", "UI/UX", "Fitness", "Booking System"],
  },
  {
    id: "6",
    slug: "artisan-collective",
    title: "Artisan Collective",
    category: "E-commerce",
    description:
      "An e-commerce platform celebrating handmade crafts and connecting artisans with conscious consumers.",
    image: "/images/portfolio/artisan-hero.svg",
    client: "The Artisan Collective",
    year: "2023",
    challenge:
      "Design an online marketplace that showcases the beauty of handmade goods while providing a smooth shopping experience.",
    solution:
      "We created a warm, editorial-style platform that highlights maker stories. Large imagery, curated collections, and intuitive navigation drive discovery.",
    results: [
      "200+ artisans onboarded",
      "$500K+ in transactions (first 6 months)",
      "92% customer satisfaction rate",
      "CSS Design Award",
    ],
    images: [
      "/images/portfolio/artisan-1.svg",
      "/images/portfolio/artisan-2.svg",
      "/images/portfolio/artisan-3.svg",
      "/images/portfolio/artisan-4.svg",
    ],
    tags: ["E-commerce", "Website", "UI/UX", "Marketplace"],
  },
];

