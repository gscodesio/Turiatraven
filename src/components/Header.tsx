"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Menu, X, Phone, Mail, Home, MapPin, Globe, 
  Map, Info, UserPlus, Shield
} from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Domestic", href: "#packages", icon: MapPin },
    { name: "International", href: "#destinations", icon: Globe },
    { name: "Plan a Tour", href: "#plan", icon: Map },
    { name: "About Us", href: "#about", icon: Info },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
        
        {/* Top Promo Bar */}
        <div className={`bg-primary text-white text-xs font-medium py-2 px-4 lg:px-12 transition-all duration-300 ${isScrolled ? 'hidden' : 'flex'} justify-between items-center`}>
          <a href="tel:+917700964364" className="flex items-center gap-2 hover:text-white/80">
            <Phone size={14} /> +91-7700964364
          </a>
          <span className="hidden md:block font-bold">Curating Extraordinary Journeys Worldwide – Book Your Free Consultation</span>
          <a href="mailto:turiatraventours@gmail.com" className="flex items-center gap-2 hover:text-white/80">
            <Mail size={14} /> Support@turiatraventours.com
          </a>
        </div>

        {/* Main Navbar */}
        <div className={`w-full bg-white transition-all duration-300 shadow-sm ${isScrolled ? 'py-3' : 'py-4'}`}>
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-black text-secondary flex items-center gap-2"
            >
              <Image src="/logo1.jpeg" alt="Turiatraven Logo" width={64} height={64} className="rounded-full shadow-md object-cover border-2 border-white" />
              <div><span className="text-primary">Turia</span>traven</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Icon size={16} className="text-primary" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons (Removed) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#plan"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
              >
                Plan My Journey
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col px-6 pt-32 lg:hidden transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-secondary hover:text-primary transition-colors flex items-center gap-3 border-b border-gray-100 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={20} className="text-primary" />
                {link.name}
              </Link>
            );
          })}
          <div className="flex flex-col gap-4 mt-4">
            <Link
              href="#plan"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-white text-base font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan My Journey
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
