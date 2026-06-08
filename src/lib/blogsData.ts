export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string[];
}

export const blogsData: BlogPost[] = [
  {
    id: "1",
    slug: "directing-budweiser-commercial-directors-cut",
    category: "Behind the Lens",
    title: "Directing the Budweiser Can Appreciation Day Campaign — A Director's Cut Review",
    author: "Tarun Kapoor",
    date: "Jan 12, 2026",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png",
    content: [
      "As a filmmaker, collaborating with a legacy brand like Budweiser is always an opportunity to push visual boundaries. For the Can Appreciation Day campaign, my focus was on high-energy transitions, bold color contrasts, and capturing the raw, celebratory spirit of iconic moments.",
      "The pre-production phase was critical. We crafted a tight, rhythmic storyboard where every single camera motion matched the tempo of the music track. During production, we utilized high-speed cinematography to capture the crisp detail of product interactions, making every single frame feel larger than life.",
      "In post-production, we pushed the limits of color grading to achieve a rich, warm cinematic glow, emphasizing the signature red and gold palettes. This director's cut represents a celebration of bold visual energy and rhythmic editing.",
      "Directing is not just about telling a story; it's about dictating the emotional rhythm of the viewer. That's what we achieved here."
    ]
  },
  {
    id: "2",
    slug: "theater-to-film-crafting-the-actor-performance",
    category: "Acting & Theatre",
    title: "From Stage to Screen: Crafting Raw, Authentic Performance Under the Spotlight",
    author: "Tarun Kapoor",
    date: "Feb 5, 2026",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/920176163540461.Y3JvcCw5MDksNzExLDE4NCww.jpg",
    content: [
      "Coming from a deep-rooted theatre background in Bangalore, the transition to film directing taught me the immense power of subtlety. On stage, your performance must reach the back row. On screen, the camera captures the slightest flicker of emotion in an actor's eyes.",
      "When directing actors, my method centers on psychological realism. I prefer working closely with talent during rehearsals, stripping away artificial 'acting' habits to uncover the raw, unpolished character truth.",
      "Whether it is a monologue like Curtain Call or a high-stakes commercial campaign, performance direction is what separates a pretty montage from an unforgettable cinematic piece.",
      "Cinema is a mirror to human behavior. If the performance isn't authentic, no amount of expensive anamorphic lenses can save it."
    ]
  },
  {
    id: "3",
    slug: "commercial-directing-three-second-hook",
    category: "Industry Insights",
    title: "The Art of the 30-Second Commercial: How to Hook Viewers Instantly",
    author: "Tarun Kapoor",
    date: "Mar 20, 2026",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/83e80e235103957.Y3JvcCwxNDQxLDExMjcsMTI1Miw2MA.png",
    content: [
      "In the modern digital ecosystem, attention is the most valuable currency. Directing campaigns for brands like OLA Electric and Ather Energy means working within tight, unforgiving timeframes where every second counts.",
      "The first 3 seconds of a commercial must hook the audience visually and aurally. This doesn't mean just showing high-speed cuts; it means presenting a compelling visual hook or an intriguing character stance that makes the thumb stop scrolling.",
      "Pacing is everything. Sound design must work in perfect harmony with the visual edit, accentuating key beats and guiding the viewer's focus to the brand's core message.",
      "A successful commercial doesn't just sell a product—it makes the viewer feel an immediate surge of style, speed, and emotion."
    ]
  }
];
