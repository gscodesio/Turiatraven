"use client";

import { motion } from "framer-motion";

const featuredJourneys = [
  {
    id: "ladakh",
    title: "Ladakh Odyssey",
    desc: "Pangong Lake, Nubra Valley, Leh monasteries and Himalayan landscapes.",
    price: "PRICE ON REQUEST",
  },
  {
    id: "kerala",
    title: "Kerala Backwaters",
    desc: "Luxury houseboat, Munnar tea gardens and Periyar wildlife.",
    price: "PRICE ON REQUEST",
  },
  {
    id: "rajasthan",
    title: "Ranthambore & Rajasthan",
    desc: "Tiger safaris, heritage palace stays and Rajasthan's iconic cities.",
    price: "PRICE ON REQUEST",
  },
];

export default function Journeys() {
  return (
    <section id="journeys" className="py-32 bg-white text-text-primary border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-champagne font-semibold mb-6">
              Featured Experiences
            </h2>
            <h3 className="text-4xl md:text-5xl font-primary">
              Journeys Worth<br />
              <span className="italic text-text-secondary">Going Far For</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="#plan"
              className="text-sm uppercase tracking-widest border-b border-text-primary pb-1 hover:text-champagne hover:border-champagne transition-colors"
            >
              View All Journeys →
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-text-primary/10 pt-12">
          {featuredJourneys.map((journey, index) => (
            <motion.div
              key={journey.id}
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h4 className="text-2xl font-primary mb-4 group-hover:text-champagne transition-colors">
                {journey.title}
              </h4>
              <p className="text-text-secondary mb-8 flex-grow">
                {journey.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs uppercase tracking-widest font-medium">
                  {journey.price}
                </span>
                <a 
                  href="#plan"
                  className="text-xs uppercase tracking-widest text-text-secondary group-hover:text-champagne transition-colors"
                >
                  Enquire →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
