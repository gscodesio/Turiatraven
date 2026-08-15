"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917700964364"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
