"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Compass } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



export default function Hero({ videos = ["/videos/video1.mp4"] }: { videos?: string[] }) {
  // Generate dynamic logic based on user rules:
  const backgroundVideos = videos.map((src, index) => {
    if (index === 0) return { src, durationMs: 4000, playbackRate: 0.5, startTime: 0 };
    if (index === 1) return { src, durationMs: 6000, playbackRate: 1.0, startTime: 3.0 }; // Play from 3s to 9s
    if (index === 2) return { src, durationMs: 4000, playbackRate: 1.0, startTime: 0 };
    return { src, durationMs: "full", playbackRate: 1.0, startTime: 0 };
  });

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Video duration logic
  useEffect(() => {
    const currentConfig = backgroundVideos[currentVideoIndex];
    if (typeof currentConfig.durationMs === "number") {
      const timer = setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
      }, currentConfig.durationMs);
      return () => clearTimeout(timer);
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = (index: number) => {
    const currentConfig = backgroundVideos[index];
    if (currentConfig.durationMs === "full") {
      setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-secondary flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        {backgroundVideos.map((video, index) => (
          <video
            key={video.src}
            src={video.src}
            autoPlay={index === currentVideoIndex}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              e.currentTarget.currentTime = video.startTime;
            }}
            onEnded={() => handleVideoEnded(index)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-90 z-10' : 'opacity-0 z-0'
            }`}
            ref={(el) => {
              if (el) {
                el.playbackRate = video.playbackRate;
                
                if (index === currentVideoIndex) {
                  el.play().catch(() => {});
                } else {
                  setTimeout(() => {
                    if (el.currentTime > 0 && !el.paused) {
                      el.pause();
                      el.currentTime = video.startTime;
                    }
                  }, 1000);
                }
              }
            }}
          />
        ))}
        {/* Darkening Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/80 z-20 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-30 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center justify-center text-center mt-[-5vh]">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-primary text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold mb-4 md:mb-6">
            Turiatraven Tours
          </h2>
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight mb-4 md:mb-6 drop-shadow-lg px-2">
            Curating <br className="block sm:hidden" /> Extraordinary <br className="hidden sm:block" />
            <span className="font-serif italic text-white/90">Journeys</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-xl max-w-2xl mx-auto font-medium drop-shadow-md px-4">
            Discover the world's most breathtaking destinations with our hand-crafted, luxury travel experiences.
          </p>
        </motion.div>

        {/* Search Console */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 md:p-3 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Destination Field */}
            <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin size={20} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 md:mb-1">Where to?</p>
                <input 
                  type="text" 
                  placeholder="e.g. Bali, Kenya..." 
                  className="w-full bg-transparent border-none outline-none text-secondary text-sm md:text-base font-bold placeholder-gray-300 focus:placeholder-transparent"
                />
              </div>
            </div>

            {/* Travel Month Field */}
            <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Calendar size={20} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 md:mb-1">When?</p>
                <input 
                  type="month" 
                  className="w-full h-auto p-0 bg-transparent border-none outline-none text-secondary text-sm md:text-base font-bold shadow-none focus:ring-0 cursor-pointer" 
                />
              </div>
            </div>

            {/* Travel Style Field */}
            <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Compass size={20} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1 text-left w-full overflow-hidden">
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 md:mb-1">Travel Style</p>
                <Select>
                  <SelectTrigger className="w-full h-auto p-0 bg-transparent border-none outline-none text-secondary text-sm md:text-base font-bold shadow-none focus:ring-0 hover:bg-transparent [&>svg]:text-gray-400 [&>svg]:h-4 [&>svg]:w-4 overflow-hidden text-ellipsis whitespace-nowrap">
                    <SelectValue placeholder="All Styles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="women">Women Only</SelectItem>
                    <SelectItem value="family">Family Retreat</SelectItem>
                    <SelectItem value="safari">Wildlife Safari</SelectItem>
                    <SelectItem value="honeymoon">Honeymoon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:w-auto flex items-stretch p-2">
              <button className="w-full md:w-auto h-full px-6 py-2.5 sm:py-3 md:px-8 md:py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-md shadow-primary/30 flex items-center justify-center gap-2">
                <Search size={20} className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Search</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Scroll Down</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-primary absolute top-0"
          />
        </div>
      </motion.div>

    </section>
  );
}
