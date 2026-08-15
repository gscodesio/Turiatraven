"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="story" className="py-32 bg-background-alt text-text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="relative h-[70vh] md:h-[90vh] w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/hero.jpg" // Using hero image as placeholder
              alt="For women who dare to experience more"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-primary mb-8 leading-tight">
              For Women Who Dare<br />
              <span className="italic text-text-secondary">To Experience More.</span>
            </h2>
            <div className="w-12 h-[1px] bg-text-primary mb-8"></div>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Travel should feel liberating, not complicated. 
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-12">
              Turiatraven designs journeys where women can explore the world with confidence, comfort and complete attention to the details that matter.
            </p>
            <a 
              href="#plan"
              className="inline-flex items-center gap-4 text-sm uppercase tracking-widest text-text-primary hover:text-champagne transition-colors group"
            >
              <span className="border-b border-text-primary group-hover:border-champagne pb-1 transition-colors">
                Design Your Journey
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
