export interface ProjectType {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: number;
  description: string;
  img: string;
  videoUrl?: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Scooter AD - Ola",
    subtitle: "OLA Electric",
    category: "Ad Films",
    year: 2026,
    description: "High-octane electric scooter ad film for OLA — bold visuals, bold rides.",
    img: "portfolio_1",
  },
  {
    id: 2,
    title: "Budweiser Can Appreciation Day",
    subtitle: "Budweiser",
    category: "Ad Films",
    year: 2024,
    description: "Director's Cut for Budweiser's Can Appreciation Day campaign — a celebration of iconic moments.",
    img: "portfolio_2",
    videoUrl: "https://vz-dadaa479-fe6.b-cdn.net/6a889e8c-7d03-44de-938d-1c5a7ddd2e0b/play_720p.mp4",
  },
  {
    id: 3,
    title: "Paraloka - Bhavya Ramesh Jewelry",
    subtitle: "Bhavya Ramesh",
    category: "Ad Films",
    year: 2024,
    description: "Elegant jewelry ad film capturing the essence of traditional craftsmanship.",
    img: "portfolio_3",
  },
  {
    id: 4,
    title: "Agaro Volumizer",
    subtitle: "Agaro",
    category: "Ad Films",
    year: 2024,
    description: "Product ad film for Agaro Volumizer showcasing beauty and transformation.",
    img: "portfolio_4",
  },
  {
    id: 5,
    title: "Ather South TVC",
    subtitle: "Ather Energy",
    category: "Ad Films",
    year: 2025,
    description: "Television commercial for Ather electric scooters targeting South Indian markets.",
    img: "portfolio_5",
  },
  {
    id: 6,
    title: "OLA Electric - Onam Campaign",
    subtitle: "OLA Electric",
    category: "Ad Films",
    year: 2025,
    description: "Festive campaign for OLA Electric celebrating the spirit of Onam.",
    img: "portfolio_1",
  },
  {
    id: 7,
    title: "RUTHLESS",
    subtitle: "Music Video",
    category: "Music Videos",
    year: 2024,
    description: "High-energy music video with bold visuals and cinematic storytelling.",
    img: "portfolio_2",
  },
  {
    id: 8,
    title: "Women's Month - Nykd by Nykaa",
    subtitle: "Nykaa",
    category: "Brand Films",
    year: 2023,
    description: "Brand film celebrating Women's Month for Nykd by Nykaa — empowering stories of strength.",
    img: "portfolio_3",
  },
  {
    id: 9,
    title: "First Club Brand Trailer",
    subtitle: "First Club",
    category: "Brand Films",
    year: 2025,
    description: "Dynamic brand trailer introducing First Club with cinematic flair.",
    img: "portfolio_4",
  },
  {
    id: 10,
    title: "Flipkart x Asics - Run Bengaluru Run",
    subtitle: "Flipkart / Asics",
    category: "Brand Films",
    year: 2024,
    description: "Collaborative brand film for Flipkart and Asics celebrating Bengaluru's running culture.",
    img: "portfolio_5",
  },
  {
    id: 11,
    title: "Royal Enfield - Motorverse 2024",
    subtitle: "Royal Enfield",
    category: "Brand Films",
    year: 2024,
    description: "Scale model film for Royal Enfield Motorverse 2024 — miniature world, maximum impact.",
    img: "portfolio_1",
  },
  {
    id: 12,
    title: "Meesho Mall Film",
    subtitle: "Meesho",
    category: "Brand Films",
    year: 2024,
    description: "Brand film for Meesho Mall showcasing accessible fashion for everyone.",
    img: "portfolio_2",
  },
  {
    id: 13,
    title: "Curtain Call",
    subtitle: "Short Film",
    category: "Short Films",
    year: 2023,
    description: "A powerful monologue exploring the world of theatre and performance.",
    img: "portfolio_3",
  },
];
