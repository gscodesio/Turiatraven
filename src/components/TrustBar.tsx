"use client";

import { motion } from "framer-motion";

const trustIndicators = [
  { value: "500+", label: "Women Travelled" },
  { value: "15+", label: "Global Destinations" },
  { value: "100%", label: "Bespoke Itineraries" },
  { value: "24/7", label: "Travel Support" },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary text-white py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/20">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center text-center ${index % 2 === 0 ? "border-none" : ""} md:border-l`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-3xl md:text-4xl font-primary text-sand mb-1">{item.value}</span>
              <span className="text-xs uppercase tracking-widest text-white/80">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
