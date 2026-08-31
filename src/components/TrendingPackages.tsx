"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Flame } from "lucide-react";
import { packagesData, Package } from "@/data/packages";

export default function TrendingPackages() {
  const [randomizedPackages, setRandomizedPackages] = useState<Package[]>([]);

  useEffect(() => {
    // Shuffle the packages randomly on load
    const shuffled = [...packagesData].sort(() => Math.random() - 0.5);
    setRandomizedPackages(shuffled);
  }, []);

  if (randomizedPackages.length === 0) return null;

  // Duplicate packages to create an infinite loop effect for the marquee
  const marqueePackages = [...randomizedPackages, ...randomizedPackages, ...randomizedPackages];

  return (
    <section className="py-20 bg-secondary overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex items-center justify-between">
        <div>
          <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Flame size={16} className="text-primary animate-pulse" /> Trending Now
          </span>
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-white">
            Most Loved Escapes
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Continuous highlights of our highly-rated journeys. Hover to pause.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-x-hidden py-4">
        {/* Left & Right fading overlays for smooth transitions */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="animate-marquee flex gap-6 px-4">
          {marqueePackages.map((pkg, index) => (
            <Link
              href={`/package/${pkg.id}`}
              key={`${pkg.id}-${index}`}
              className="w-[340px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="340px"
                />
                <div className="absolute top-3 right-3 bg-secondary/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm border border-white/10">
                  {pkg.duration}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1 self-end">
                  {pkg.category}
                </span>
                <h4 className="text-lg font-primary font-bold mb-2 text-white group-hover:text-primary transition-colors line-clamp-1">
                  {pkg.title}
                </h4>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2 h-8">
                  {pkg.desc}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1.5 flex-grow">
                  {pkg.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Plan &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
