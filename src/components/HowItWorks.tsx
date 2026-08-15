"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell Us Your Plan",
    desc: "Destination, dates, travellers and preferences.",
  },
  {
    num: "02",
    title: "We Build Your Journey",
    desc: "Our team creates your customised itinerary.",
  },
  {
    num: "03",
    title: "Refine & Confirm",
    desc: "Adjust everything until it feels right.",
  },
  {
    num: "04",
    title: "Travel With Confidence",
    desc: "We support you throughout your journey.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold">
            Planning Your Trip Is Simple
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-24 bottom-[-3rem] left-1/2 w-0.5 bg-gray-100 -translate-x-1/2 z-[-1]"></div>
                )}
                
                <div className="text-4xl font-primary text-primary mb-4 bg-white border border-gray-100 w-24 h-24 rounded-full flex items-center justify-center shadow-sm">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
