import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Stats from './Stats';
import Process from './Process';
import WhyMe from './WhyMe';
import Faq from '../components/Faq';

const valuesData = [
  {
    id: "01",
    title: "Creativity",
    desc: "We believe in the power of imagination and creative thinking. We strive to infuse innovation and originality into everything we do, producing unique and captivating video content."
  },
  {
    id: "02",
    title: "Quality",
    desc: "Excellence is non-negotiable. We are committed to delivering top-notch video production services that meet and exceed our clients' expectations, from concept to final product."
  },
  {
    id: "03",
    title: "Collaboration",
    desc: "We value teamwork and collaboration. We work closely with our clients, understanding their vision and goals, to ensure that every project is a true collaboration resulting in success."
  },
  {
    id: "04",
    title: "Integrity",
    desc: "Trust and honesty are at the heart of our agency. We maintain the highest ethical standards in all our interactions, ensuring transparency, reliability, and long-lasting relationships with our clients and partners."
  }
];

const teamData = [
  {
    id: 1,
    name: "John Davis",
    role: "Creative Director",
    image: "/assets/team_1.png"
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Cinematographer",
    image: "/assets/team_2.png"
  },
  {
    id: 3,
    name: "David Smith",
    role: "Video Editor",
    image: "/assets/team_3.png"
  }
];

const featuresData = [
  {
    title: "Exceptional Creativity",
    desc: "Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos."
  },
  {
    title: "Proven Track Record",
    desc: "Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again."
  },
  {
    title: "Collaborative Approach",
    desc: "We don't just work for our clients; we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life."
  },
  {
    title: "Innovative Solutions",
    desc: "We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations."
  },
  {
    title: "Exceptional Team",
    desc: "Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project."
  },
  {
    title: "Attention to Detail",
    desc: "We obsess over the finer points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact."
  }
];

const testimonialsData = [
  {
    id: 1,
    quote: "We are thrilled with our new corporate videos. The team was incredibly calm, patient, and fostered a pleasant atmosphere. Everything came together seamlessly! We wholeheartedly endorse and would recommend them anytime.",
    author: "Sarah Adams",
    role: "Chief Marketing Officer, HorizonTech Solutions"
  },
  {
    id: 2,
    quote: "Our experience with CreativeEdge Productions was outstanding! Their team's relaxed and patient approach, along with the creation of a delightful atmosphere, led to the successful delivery of our corporate videos.",
    author: "Michael Lee",
    role: "Director of Sales, EcoGrowth Enterprises"
  },
  {
    id: 3,
    quote: "After a year of working on various projects with CreativeEdge, I'm consistently amazed by their professionalism, commitment, and extensive knowledge in the film and video industry. Keep it up!",
    author: "Emily Rodriguez",
    role: "Creative Director, BrightSights Media"
  },
  {
    id: 4,
    quote: "Working with CreativeEdge Productions was a pleasure. Their team's ability to maintain a calm and patient demeanor while creating a fantastic atmosphere resulted in exceptional corporate videos.",
    author: "David Chen",
    role: "CEO, Nexus Innovations"
  }
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-[#0d0d0d] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
          <motion.img 
            style={{ y, opacity }}
            src="/assets/about_bg.png" 
            alt="About Us background" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 pt-20">
          <div className="max-w-[700px] space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[64px] md:text-[96px] font-display font-bold leading-[1] tracking-[-0.03em] text-white"
            >
              About U<span className="text-white/40">s</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px]"
            >
              Discover the Team That Adds a Dose of Fun to Video Production. This Is Us, the StoryStream Family, where passion meets pixels with a smile!
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute left-6 md:left-12 bottom-20 z-20 flex flex-col items-center gap-6"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase rotate-90 origin-left translate-x-3">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-6">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-orange"
            />
          </div>
        </motion.div>
      </section>

      {/* Agency Overview & Stats */}
      <section className="bg-[#0d0d0d] pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
            <div className="w-full lg:w-1/3">
              <h2 className="text-[32px] md:text-[40px] font-display font-bold mb-8">About Our Agency</h2>
              <div className="space-y-6">
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xl font-display font-semibold text-white/90">Visionary Creations Award</h4>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xl font-display font-semibold text-white/90">CineMasters Excellence</h4>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xl font-display font-semibold text-white/90">ReelGenius Award</h4>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 space-y-6 text-[18px] text-white/60 font-light leading-[1.8]">
              <p>Established in 2015, we have dedicated ourselves to crafting captivating visual narratives defined by creativity, innovation, and an unwavering commitment to excellence in video production.</p>
              <p>Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values Section */}
      <section className="bg-[#0d0d0d] py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] font-display font-bold text-center max-w-[800px] mx-auto mb-20 leading-[1.1] tracking-tight">
            Our Values: The Secret Sauce in Every StoryStream Creation!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {valuesData.map((val, i) => (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[30px] p-10 relative overflow-hidden group hover:border-brand-orange/50 transition-colors duration-500"
              >
                <div className="absolute top-10 right-10 text-[64px] font-display font-bold text-white/5 group-hover:text-brand-orange/10 transition-colors duration-500 leading-none">
                  {val.id}
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 relative z-10">{val.title}</h3>
                <p className="text-white/60 font-light leading-[1.7] relative z-10">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#0a0a0a] py-32 px-6 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] font-display font-bold text-center mb-20 leading-[1.1] tracking-tight">
            Peek Behind the Curtain:<br/>Meet Our Fantastic Team!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group"
              >
                <div className="w-full aspect-square rounded-[30px] overflow-hidden mb-6 relative bg-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="flex gap-4">
                      <a href="#" className="text-white/70 hover:text-brand-orange transition-colors font-bold text-sm">Facebook</a>
                      <a href="#" className="text-white/70 hover:text-brand-orange transition-colors font-bold text-sm">Linkedin</a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-display font-bold mb-1 group-hover:text-brand-orange transition-colors">{member.name}</h4>
                  <p className="text-brand-orange/80 font-display text-sm tracking-widest uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      
      <WhyMe />

      {/* Features Grid */}
      <section className="bg-[#0d0d0d] py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] font-display font-bold mb-16 leading-[1.1] tracking-tight">
            Wait! There's more….
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {featuresData.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="text-xl font-display font-bold mb-4">{feat.title}</h4>
                <p className="text-white/60 font-light leading-[1.7]">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0a0a0a] py-32 px-6 border-y border-white/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] font-display font-bold text-center mb-20 leading-[1.1] tracking-tight">
            Our Client Chronicles:<br/>Stories that Make Us Smile!
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                <svg className="w-16 h-16 mx-auto mb-8 text-brand-orange/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
                <p className="text-2xl md:text-3xl font-display font-light leading-relaxed mb-10 text-white/90 italic">
                  "{testimonialsData[activeTestimonial].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold font-display text-brand-orange mb-1">{testimonialsData[activeTestimonial].author}</h4>
                  <p className="text-white/50 text-sm">{testimonialsData[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'bg-brand-orange scale-125' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <Faq />

    </main>
  );
}
