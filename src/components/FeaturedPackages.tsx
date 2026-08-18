"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Check } from "lucide-react";

const filterTabs = ["All", "Domestic", "International", "Women's Special", "Safari"];

import Link from "next/link";
import { packagesData } from "@/data/packages";

export default function FeaturedPackages() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPackages = activeTab === "All"
    ? packagesData
    : packagesData.filter(p => p.filters.includes(activeTab));

  return (
    <section id="packages" className="py-24 bg-background-alt text-text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
            Popular Journeys
          </h2>
          <p className="text-muted-text max-w-xl mx-auto md:mx-0">
            Thoughtfully planned itineraries. Ready to customise.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-4 scrollbar-hide">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab 
                  ? "bg-primary text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg, index) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image Section (~55% visual weight) */}
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    {pkg.category}
                  </span>
                  <h4 className="text-2xl font-primary font-bold mb-3">{pkg.title}</h4>
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2">{pkg.desc}</p>
                  
                  {/* Highlights */}
                  <ul className="mb-6 space-y-2">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <li className="text-xs font-bold text-primary pl-6 pt-1">
                        + {pkg.highlights.length - 3} more highlights
                      </li>
                    )}
                  </ul>

                  {/* Price & CTA */}
                  <div className="border-t border-gray-100 pt-5 mt-auto">
                    <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">{pkg.price}</p>
                    <div className="flex items-center gap-3">
                      <Link 
                        href={`/package/${pkg.id}`}
                        className="flex-1 bg-secondary hover:bg-primary text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-colors group/btn"
                      >
                        View Itinerary
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
