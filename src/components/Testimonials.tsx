"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    destination: "Bali Women's Retreat",
    quote: "Every detail was considered. It felt less like a tour and more like traveling with a very knowledgeable friend.",
  },
  {
    id: 2,
    name: "Anjali Mehta",
    destination: "Kenya Safari",
    quote: "An extraordinary journey. I felt completely safe and the lodge selections were absolutely breathtaking.",
  },
  {
    id: 3,
    name: "Sneha Iyer",
    destination: "Vietnam & Cambodia",
    quote: "Turiatraven took all the stress out of planning. We just showed up and everything was perfect.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-white text-text-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-champagne font-semibold mb-6">
            Travel Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-primary italic text-text-secondary">
            Experiences that stay with you.
          </h3>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-primary leading-snug mb-12">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-sm uppercase tracking-widest font-semibold mb-2">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs uppercase tracking-widest text-champagne">
                  {testimonials[currentIndex].destination}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16">
          <button 
            onClick={handlePrev}
            className="p-4 border border-text-primary/20 rounded-full hover:border-champagne hover:text-champagne transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="p-4 border border-text-primary/20 rounded-full hover:border-champagne hover:text-champagne transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
