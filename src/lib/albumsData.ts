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
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png",
    projectType: "Street Photography",
    client: "Indie Culture Mag",
    camera: "Sony A7R V",
    lenses: "FE 35mm f/1.4 GM",
    equipment: "Peak Design Travel Tripod",
    year: "2024",
    images: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/50d2bf210324995.Y3JvcCwyMDUzLDE2MDYsNDE2LDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/72f779210322387.Y3JvcCwxNjAwLDEyNTIsNjEwLDA.png"
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
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/5c8242235407827.Y3JvcCwxMzk4LDEwOTQsNTg1LDA.png",
    projectType: "Sports & Automotive",
    client: "Velocity Motorsports",
    camera: "Canon EOS R3",
    lenses: "RF 70-200mm f/2.8 L IS USM",
    equipment: "DJI Ronin 4D",
    year: "2024",
    images: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/5c8242235407827.Y3JvcCwxMzk4LDEwOTQsNTg1LDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/83e80e235103957.Y3JvcCwxNDQxLDExMjcsMTI1Miw2MA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/40058f213299753.Y3JvcCwxODkyLDE0ODAsNDkxLDA.png"
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
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/70f41a224737901.Y3JvcCwxNzg5LDE0MDAsNTU4LDA.png",
    projectType: "Landscape & Travel",
    client: "Indonesia Tourism",
    camera: "Fujifilm GFX 100S",
    lenses: "GF 32-64mm f/4 R LM WR",
    equipment: "DJI Mavic 3 Pro",
    year: "2024",
    images: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/70f41a224737901.Y3JvcCwxNzg5LDE0MDAsNTU4LDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/8630eb157287825.Y3JvcCw8MDgsNjMyLDAsMA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/4d013d235102067.Y3JvcCwxNzAyLDEzMzIsNjQ0LDA.png"
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
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/40058f213299753.Y3JvcCwxODkyLDE0ODAsNDkxLDA.png",
    projectType: "Landscape & Culture",
    client: "Siam Travel Diaries",
    camera: "Sony A7 IV",
    lenses: "FE 24-70mm f/2.8 GM II",
    equipment: "Zhiyun Crane 4",
    year: "2023",
    images: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/40058f213299753.Y3JvcCwxODkyLDE0ODAsNDkxLDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/5c3a1a198882905.Y3JvcCwyMTE3LDE2NTYsNTI5LDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/8630eb157287825.Y3JvcCw8MDgsNjMyLDAsMA.png"
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
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/920176163540461.Y3JvcCw5MDksNzExLDE4NCww.jpg",
    projectType: "Documentary Portraiture",
    client: "Global Humans Foundation",
    camera: "Hasselblad X2D 100C",
    lenses: "XCD 90mm f/2.5 V",
    equipment: "Profoto A10 On-Camera Flash",
    year: "2023",
    images: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/920176163540461.Y3JvcCw5MDksNzExLDE4NCww.jpg",
      "https://mir-s3-cdn-cf.behance.net/projects/404/50d2bf210324995.Y3JvcCwyMDUzLDE2MDYsNDE2LDA.png",
      "https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png"
    ],
    highlights: [
      "High-fidelity medium format studio and natural lighting portraits.",
      "Close-up details highlighting unique skin, eyes, and cultural elements.",
      "Shot across 8 different countries over 18 months."
    ]
  }
];
