import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';

const studioAmenities = [
  "Professional Gears", "Recording Facility", "Professional Setup", 
  "Premium Backdrops", "Green Screen", "Beautiful Interior", 
  "Open space", "Natural Light Source", "Rooftop"
];

const preProduction = [
  { title: "Concept Development", desc: "We work closely with you to brainstorm ideas, themes, and concepts that align with your goals and vision. This is where the creative magic begins." },
  { title: "Scriptwriting", desc: "Our experienced scriptwriters craft compelling narratives that effectively convey your message. Whether it's a commercial, corporate video, or any other format." },
  { title: "Storyboarding", desc: "Visual storytelling is key to engaging your audience. We create storyboards that outline the visual sequence, shot angles, and transitions." },
  { title: "Location Scouting", desc: "The right location can make or break a video. We scout and select the ideal settings, whether it's a studio, outdoor location, or a unique environment." },
  { title: "Casting and Talent", desc: "We handle talent auditions, casting, and management. Our goal is to select the perfect actors, presenters, or hosts who bring your script to life." },
  { title: "Equipment Planning", desc: "We ensure that the right equipment and skilled crew members are in place for a successful shoot. This includes camera selection, lighting setup, and more." },
];

const production = [
  { title: "Cinematography", desc: "Our skilled cinematographers expertly frame and capture your content, ensuring that every shot is visually stunning and engaging." },
  { title: "Drone Videography", desc: "Elevate your visuals with breathtaking aerial footage. Our drone videography services provide stunning perspectives that add a dynamic dimension." },
  { title: "Live Streaming", desc: "We're well-versed in live streaming, enabling you to broadcast events, presentations, and content in real-time to a global audience." },
  { title: "Steadicam & Gimbal", desc: "For silky-smooth and stabilized footage, our Steadicam and gimbal work ensures that every shot is free from shaky distractions." },
  { title: "Multi-Camera Setup", desc: "Multi-camera setups add versatility and dynamism to your video. We utilize multiple cameras to capture different angles and perspectives." },
  { title: "Green Screen", desc: "For projects that require background replacement or visual effects, our green screen and chroma key services allow us to create virtually any environment." },
];

const postProduction = [
  { title: "Video Editing", desc: "Our skilled editors meticulously assemble and edit the footage, creating a seamless, coherent, and compelling narrative that captivates your audience." },
  { title: "Color Grading", desc: "We enhance the visuals by applying color grading techniques, ensuring that your video looks its best with vibrant colors and a consistent mood." },
  { title: "Audio Enhancement", desc: "Clear and impactful audio is vital for a memorable video. We provide audio enhancement services to make sure your message is conveyed with crystal clarity." },
  { title: "3D Animation & CGI", desc: "To add a touch of magic to your project, we offer 3D animation and CGI services that create stunning visual effects and immersive 3D elements." },
  { title: "Subtitles & Captions", desc: "We can add subtitles and closed captions to make your content accessible to a broader audience, ensuring that your message reaches everyone." },
  { title: "Whiteboard Animation", desc: "Whiteboard animation is an engaging way to convey complex ideas. Our whiteboard animation services turn your concepts into captivating visuals." },
];

const categories = [
  "Corporate Video", "Commercial Video", "Documentary Film", "Product Video", 
  "Animation", "Event Video", "Educational Video", "Entertainment Video", 
  "Fashion Video", "Lifestyle", "Interview Video", "Social Media Video"
];

const ProcessCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300">
    <h4 className="text-xl font-bold font-display mb-4">{title}</h4>
    <p className="text-white/60 leading-relaxed font-light text-[15px]">{desc}</p>
  </div>
);

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[80px] mx-2 md:mx-4 mb-24 md:mb-32">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="/assets/services_hero.png" 
            alt="Video Production Services" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0d0d0d]" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-[900px] mx-auto mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-[13px] font-medium tracking-wide uppercase mb-6">
              Services
            </div>
            <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-display font-bold leading-[1.1] tracking-[-0.02em] mb-8">
              Join us on a <span className="text-brand-orange">journey</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-[1.6] max-w-[600px] mx-auto font-light">
              Where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Studio Marquee Section */}
      <section className="py-24 overflow-hidden border-y border-white/5 bg-[#111]">
        <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
          <h2 className="text-[32px] md:text-[48px] font-display font-bold mb-6">
            Rent, Shoot, Wow: <span className="text-brand-orange">Our Studio Awaits!</span>
          </h2>
          <p className="text-white/60 max-w-[600px] mx-auto font-light leading-relaxed mb-8">
            We've got the coolest tech and all the resources to bring your ideas to life. Book a tour and come be a part of the excitement – we're eager to show you around with a smile!
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-brand-orange text-black font-bold rounded-full hover:bg-brand-yellow transition-colors duration-300">
            Book a Tour
          </Link>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 py-4">
            {[...studioAmenities, ...studioAmenities].map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="text-[20px] md:text-[24px] font-display font-bold text-white/40">{amenity}</span>
                <div className="w-2 h-2 rounded-full bg-brand-orange/50" />
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8 py-4">
            {[...studioAmenities, ...studioAmenities].map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="text-[20px] md:text-[24px] font-display font-bold text-white/40">{amenity}</span>
                <div className="w-2 h-2 rounded-full bg-brand-orange/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Production */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="space-y-6">
              <div className="w-16 h-[2px] bg-brand-orange" />
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight">Pre-Production</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                Before the cameras roll, the magic of video production begins with pre-production. This is where your ideas take shape, scripts are written, and plans are made. We lay the foundation for your video project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preProduction.map((item, idx) => (
                <ProcessCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-32 px-6 bg-[#111]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
              {production.map((item, idx) => (
                <ProcessCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
            <div className="space-y-6 order-1 lg:order-2 lg:text-right flex flex-col lg:items-end">
              <div className="w-16 h-[2px] bg-brand-orange" />
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight">Production</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg lg:text-right max-w-[400px]">
                The heart of video production lies in the production phase. This is where we turn your vision into reality. We offer a wide range of production services to bring your vision to the screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Production */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="space-y-6">
              <div className="w-16 h-[2px] bg-brand-orange" />
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight">Post-Production</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                The real magic happens in post-production. This is where we take the raw footage and craft it into a polished, engaging video. We pay meticulous attention to detail to ensure your video looks and sounds its best.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postProduction.map((item, idx) => (
                <ProcessCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-[40px] md:text-[56px] font-display font-bold">
              We are your experts in these categories
            </h2>
            <p className="text-white/60 max-w-[600px] mx-auto font-light text-lg">
              Our creative toolbox overflows with video possibilities! From captivating stories to informative animations, we craft videos that fit every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between h-[200px]"
              >
                <div className="text-brand-orange/30 font-display font-bold text-2xl group-hover:text-brand-orange transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-display font-bold group-hover:translate-x-2 transition-transform duration-300">
                  {category}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-block px-10 py-5 rounded-full border border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300 font-bold tracking-wide">
              View all Videos
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <Faq />

    </main>
  );
}
