"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Map, Briefcase } from "lucide-react"; // Using reasonable lucide icons

const principles = [
  {
    title: "Women-First Travel",
    desc: "Designed around safety, comfort and confidence.",
    icon: ShieldCheck,
  },
  {
    title: "100% Customised",
    desc: "No cookie-cutter itineraries.",
    icon: Map, // Replaced Customize with Map (Customize doesn't exist in lucide by default, usually PenTool or Sliders)
  },
  {
    title: "Safari Specialists",
    desc: "Expertise across Kenya, Tanzania and South Africa.",
    icon: Briefcase,
  },
  {
    title: "End-to-End Support",
    desc: "Flights, visas, transfers and accommodation.",
    icon: ShieldCheck,
  },
];

export default function SignatureExperience() {
  return (
    <section id="why-us" className="py-24 bg-secondary text-white border-t border-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold">
            Why Travel With Turiatraven?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-8 border border-white/10 text-center hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
