"use client";

import { MessageCircle, Phone, Navigation } from "lucide-react";
import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-between items-center px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <a 
        href="https://wa.me/919594992125" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition-colors"
      >
        <MessageCircle size={20} className="text-[#25D366]" />
        <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <a 
        href="tel:+919594992125" 
        className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition-colors"
      >
        <Phone size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
      </a>

      <Link 
        href="#plan"
        className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition-colors"
      >
        <Navigation size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Plan Trip</span>
      </Link>
    </div>
  );
}
