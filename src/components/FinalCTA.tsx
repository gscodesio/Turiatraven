"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



export default function FinalCTA() {
  return (
    <section id="plan" className="relative py-24 bg-secondary text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/hero.jpg"
          alt="Travel background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold mb-6">
              Have A Trip In Mind?
            </h2>
            <p className="text-lg text-white/80 max-w-md mb-10">
              Tell us where you want to go. We'll help you design the rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/917700964364" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B958] text-white px-8 py-4 rounded-lg font-bold transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <button 
                className="flex items-center justify-center bg-white text-secondary hover:bg-background-alt px-8 py-4 rounded-lg font-bold transition-colors"
              >
                Plan My Journey
              </button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-xl text-secondary"
          >
            <h3 className="text-2xl font-primary font-bold mb-6">Plan My Journey</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your number" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Destination</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Where to?" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Travel Month</label>
                  <input 
                    type="month" 
                    className="w-full !h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-secondary" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Travellers</label>
                  <input type="number" min="1" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Enter number" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Travel Type</label>
                  <Select>
                    <SelectTrigger className="w-full !h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors shadow-none text-left">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="women-only">Women-only group</SelectItem>
                      <SelectItem value="couple">Couple</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Budget</label>
                <Select>
                  <SelectTrigger className="w-full !h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors shadow-none text-left">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000–₹1 Lakh</SelectItem>
                    <SelectItem value="1l-2l">₹1–2 Lakh</SelectItem>
                    <SelectItem value="2l-5l">₹2–5 Lakh</SelectItem>
                    <SelectItem value="5l-plus">₹5 Lakh+</SelectItem>
                    <SelectItem value="not-sure">Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us what kind of trip you're imagining..."></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-secondary transition-colors mt-2 flex items-center justify-center gap-2"
              >
                Send My Enquiry &rarr;
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
