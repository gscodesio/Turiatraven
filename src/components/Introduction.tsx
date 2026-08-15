"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Introduction() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-primary font-bold mb-4">
                Travel Designed Around You
              </h2>
              <h3 className="text-4xl md:text-5xl font-primary font-bold text-secondary mb-6">
                Premium journeys without the complexity.
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Turiatraven Tours was created around a simple belief: travel should feel personal. The team designs journeys around each traveller's preferences, pace and personality, with a strong focus on women travellers seeking comfort, confidence and extraordinary experiences.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-medium text-secondary">
                  <CheckCircle2 className="text-primary" /> 500+ Women Travelled
                </li>
                <li className="flex items-center gap-3 font-medium text-secondary">
                  <CheckCircle2 className="text-primary" /> 15+ Global Destinations
                </li>
              </ul>

              <a 
                href="#services"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary transition-colors"
              >
                About Turiatraven &rarr;
              </a>
            </motion.div>
          </div>

          <div className="z-10 h-full">
            <motion.div 
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/bali.jpg"
                alt="Women traveling with Turiatraven"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
