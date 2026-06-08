export interface AlbumDetailType {
  slug: string;
  title: string;
  location: string;
  image: string;
  projectType: string;
  client: string;
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
    location: "Varanasi & Delhi, India",
    image: "https://images.unsplash.com/photo-1561350111-7daa4f284bc6?auto=format&fit=crop&w=1200&q=80",
    projectType: "Street Photography",
    client: "Indie Culture Mag",
    camera: "Sony A7R V",
    lenses: "FE 35mm f/1.4 GM",
    equipment: "Peak Design Travel Tripod",
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1561350111-7daa4f284bc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477587458883-471a5ed08ff4?auto=format&fit=crop&w=1200&q=80"
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
    location: "NASCAR & Track Days",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    projectType: "Sports & Automotive",
    client: "Velocity Motorsports",
    camera: "Canon EOS R3",
    lenses: "RF 70-200mm f/2.8 L IS USM",
    equipment: "DJI Ronin 4D",
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=80",
    projectType: "Landscape & Travel",
    client: "Indonesia Tourism",
    camera: "Fujifilm GFX 100S",
    lenses: "GF 32-64mm f/4 R LM WR",
    equipment: "DJI Mavic 3 Pro",
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    projectType: "Landscape & Culture",
    client: "Siam Travel Diaries",
    camera: "Sony A7 IV",
    lenses: "FE 24-70mm f/2.8 GM II",
    equipment: "Zhiyun Crane 4",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    projectType: "Documentary Portraiture",
    client: "Global Humans Foundation",
    camera: "Hasselblad X2D 100C",
    lenses: "XCD 90mm f/2.5 V",
    equipment: "Profoto A10 On-Camera Flash",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "High-fidelity medium format studio and natural lighting portraits.",
      "Close-up details highlighting unique skin, eyes, and cultural elements.",
      "Shot across 8 different countries over 18 months."
    ]
  }
];
