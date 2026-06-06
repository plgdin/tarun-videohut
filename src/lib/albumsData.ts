export interface AlbumDetailType {
  slug: string;
  title: string;
  location: string;
  image: string;
  projectType: string;
  client: string; // The reference site typo is "Clinet", but we will display "Client" in a premium way or map it
  camera: string;
  lenses: string;
  equipment: string;
  year: string;
  images: string[];
  highlights: string[];
}

export const albumsData: AlbumDetailType[] = [
  {
    slug: "urban-chronicles",
    title: "Urban Chronicles",
    location: "Streets of India",
    image: "/assets/portfolio_1.png",
    projectType: "Street Photography",
    client: "Indie Culture Mag",
    camera: "Sony A7R V",
    lenses: "FE 35mm f/1.4 GM",
    equipment: "Peak Design Travel Tripod",
    year: "2023",
    images: [
      "/assets/portfolio_1.png",
      "/assets/portfolio_2.png",
      "/assets/portfolio_3.png"
    ],
    highlights: [
      "Captured active street dynamics during early sunrise in Varanasi.",
      "Utilized only ambient streetlights and golden hour morning rays.",
      "High-contrast color profiles to highlight urban texture differences."
    ]
  },
  {
    slug: "speed-demons",
    title: "Speed Demons",
    location: "NASCAR Tracks",
    image: "/assets/portfolio_2.png",
    projectType: "Sports & Automotive",
    client: "Velocity Motorsports",
    camera: "Canon EOS R3",
    lenses: "RF 70-200mm f/2.8 L IS USM",
    equipment: "DJI Ronin 4D",
    year: "2023",
    images: [
      "/assets/portfolio_2.png",
      "/assets/portfolio_3.png",
      "/assets/portfolio_1.png"
    ],
    highlights: [
      "Panning photography at 1/30s at speeds exceeding 200 mph.",
      "High dynamic range grading of rubber tracks and hot asphalt.",
      "Behind-the-scenes pit lane shots during crucial wheel changes."
    ]
  },
  {
    slug: "exploring-the-wonders-of-indonesia",
    title: "Exploring the Wonders of Indonesia",
    location: "Indonesia",
    image: "/assets/portfolio_3.png",
    projectType: "Landscape & Travel",
    client: "Indonesia Tourism",
    camera: "Fujifilm GFX 100S",
    lenses: "GF 32-64mm f/4 R LM WR",
    equipment: "DJI Mavic 3 Pro",
    year: "2023",
    images: [
      "/assets/portfolio_3.png",
      "/assets/portfolio_4.png",
      "/assets/portfolio_5.png"
    ],
    highlights: [
      "Sunrise captures of Mount Bromo with low-hanging fog beds.",
      "Stunning drone sweeps of Tumpak Sewu waterfall.",
      "Vibrant lifestyle captures of traditional Balinese dancers."
    ]
  },
  {
    slug: "thailand-a-photographic-odyssey",
    title: "Thailand: A Photographic Odyssey",
    location: "Thailand",
    image: "/assets/portfolio_4.png",
    projectType: "Landscape & Culture",
    client: "Siam Travel Diaries",
    camera: "Sony A7 IV",
    lenses: "FE 24-70mm f/2.8 GM II",
    equipment: "Zhiyun Crane 4",
    year: "2023",
    images: [
      "/assets/portfolio_4.png",
      "/assets/portfolio_5.png",
      "/assets/portfolio_1.png"
    ],
    highlights: [
      "Night landscape of Bangkok's glowing street vendors.",
      "Wide angle photography of limestone cliffs in Phang Nga Bay.",
      "Detailed texture of historic temple ruins in Ayutthaya."
    ]
  },
  {
    slug: "faces-of-the-world-a-portrait-gallery",
    title: "Faces of the World: A Portrait Gallery",
    location: "Worldwide",
    image: "/assets/portfolio_5.png",
    projectType: "Documentary Portraiture",
    client: "Global Humans Foundation",
    camera: "Hasselblad X2D 100C",
    lenses: "XCD 90mm f/2.5 V",
    equipment: "Profoto A10 On-Camera Flash",
    year: "2023",
    images: [
      "/assets/portfolio_5.png",
      "/assets/portfolio_1.png",
      "/assets/portfolio_2.png"
    ],
    highlights: [
      "High-fidelity medium format studio and natural lighting portraits.",
      "Close-up details highlighting unique skin, eyes, and cultural elements.",
      "Shot across 8 different countries over 18 months."
    ]
  }
];
