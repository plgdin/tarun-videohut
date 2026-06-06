export interface ProjectType {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  img: string;
}

export const projectsData: ProjectType[] = [
  { id: 1, title: "GreenWaves", subtitle: "Eco-Warriors", category: "Documentary", img: "portfolio_1" },
  { id: 2, title: "Mystic Horizons", subtitle: "ModeElite", category: "Commercial", img: "portfolio_2" },
  { id: 3, title: "Pixel Fusion", subtitle: "Techno", category: "Corporate", img: "portfolio_3" },
  { id: 4, title: "EcoExplorer", subtitle: "GreenEarth", category: "Documentary", img: "portfolio_4" },
  { id: 5, title: "Urban Uplift", subtitle: "MetroScape", category: "Short Film", img: "portfolio_5" },
  { id: 6, title: "Sonic Waves", subtitle: "AudioTech", category: "Commercial", img: "portfolio_1" },
  { id: 7, title: "Creative Minds", subtitle: "Agency Spotlight", category: "Corporate", img: "portfolio_2" },
  { id: 8, title: "Vapor Trails", subtitle: "Aviation Film", category: "Short Film", img: "portfolio_3" },
  { id: 9, title: "Golden Sands", subtitle: "Travel Film", category: "Documentary", img: "portfolio_4" },
  { id: 10, title: "Neon Pulse", subtitle: "Nightlife Campaign", category: "Commercial", img: "portfolio_5" },
  { id: 11, title: "Cyber Security", subtitle: "SecureGlobal", category: "Corporate", img: "portfolio_1" },
  { id: 12, title: "Lost & Found", subtitle: "Indie Short", category: "Short Film", img: "portfolio_2" },
  { id: 13, title: "Chasing Light", subtitle: "Dawn Landscapes", category: "Documentary", img: "portfolio_3" },
  { id: 14, title: "Active Wear", subtitle: "Apex Athletics", category: "Commercial", img: "portfolio_4" }
];
