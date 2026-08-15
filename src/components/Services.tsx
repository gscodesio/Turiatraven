"use client";

import { motion } from "framer-motion";
import { Compass, Users, MapPin, Plane, FileText, Ticket, Hotel, HeadphonesIcon } from "lucide-react";

const services = [
  {
    title: "Customised Tours",
    desc: "Journeys designed around your preferences.",
    icon: Compass,
  },
  {
    title: "Women-Only Trips",
    desc: "Curated travel experiences for women.",
    icon: Users,
  },
  {
    title: "Safari Experiences",
    desc: "Kenya, Tanzania and South Africa.",
    icon: MapPin,
  },
  {
    title: "Domestic Packages",
    desc: "Curated journeys across India.",
    icon: Plane,
  },
  {
    title: "Visa Assistance",
    desc: "Support with travel documentation.",
    icon: FileText,
  },
  {
    title: "Flight Booking",
    desc: "International and domestic flight assistance.",
    icon: Ticket,
  },
  {
    title: "Hotels & Stays",
    desc: "Curated accommodation options.",
    icon: Hotel,
  },
  {
    title: "Transfers & Concierge",
    desc: "End-to-end travel support.",
    icon: HeadphonesIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background-alt text-secondary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
            Everything You Need, One Travel Partner
          </h2>
          <p className="text-muted-text max-w-xl mx-auto">
            From planning to execution, we provide comprehensive travel solutions for a seamless experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/5 text-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
