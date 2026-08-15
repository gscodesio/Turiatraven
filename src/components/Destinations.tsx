"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const categories = ["All", "Asia", "Africa", "Indian Ocean", "Europe", "Oceania"];

const destinations = [
  { id: "kenya-safari", name: "Kenya", region: "Africa", image: "/kenya.jpg" },
  { id: "bali-escapade", name: "Bali", region: "Asia", image: "/bali.jpg" },
  { id: "south-africa", name: "South Africa", region: "Africa", image: "/hero.jpg" },
  { id: "sri-lanka", name: "Sri Lanka", region: "Asia", image: "/hero.jpg" },
  { id: "kazakhstan", name: "Kazakhstan", region: "Asia", image: "/hero.jpg" },
  { id: "azerbaijan", name: "Azerbaijan", region: "Europe", image: "/kenya.jpg" },
];

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDestinations = activeCategory === "All" 
    ? destinations 
    : destinations.filter(d => d.region === activeCategory);

  return (
    <section id="destinations" className="py-24 bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              Where Will You Go Next?
            </h2>
            <p className="text-muted-text max-w-xl">
              From island escapes to African safaris, discover journeys designed around the way you want to travel.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="#all-destinations"
              className="text-sm font-bold text-primary hover:text-secondary transition-colors flex items-center gap-2"
            >
              View All Destinations &rarr;
            </Link>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat 
                  ? "bg-secondary text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <motion.div layout className="min-h-[350px]">
          {filteredDestinations.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center h-64 text-center"
            >
              <p className="text-xl text-gray-500 font-medium">New destinations in this region are coming soon!</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-primary font-bold hover:underline"
              >
                View all available destinations
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredDestinations.map((dest, index) => (
                  <motion.div
                    layout
                    key={dest.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary flex items-center gap-1 shadow-sm">
                        <MapPin size={12} className="text-primary" /> {dest.region}
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <h4 className="text-2xl font-primary font-bold group-hover:text-primary transition-colors">{dest.name}</h4>
                      <Link 
                        href={`/package/${dest.id}`}
                        className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        &rarr;
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
