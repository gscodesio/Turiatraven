import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl tracking-[0.1em] font-primary uppercase font-bold block mb-6">
              TURIATRAVEN
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium women-focused travel company crafting bespoke journeys across India and the world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why Travel With Us</Link></li>
              <li><Link href="#journal" className="hover:text-white transition-colors">Travel Journal</Link></li>
              <li><Link href="#plan" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Destinations</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="#destinations" className="hover:text-white transition-colors">Asia</Link></li>
              <li><Link href="#destinations" className="hover:text-white transition-colors">Africa</Link></li>
              <li><Link href="#destinations" className="hover:text-white transition-colors">Indian Ocean</Link></li>
              <li><Link href="#destinations" className="hover:text-white transition-colors">Europe</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Turiatraven Tours OPC Pvt Ltd<br/>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+917700964364" className="hover:text-white transition-colors">+91 77009 64364</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:turiatraventours@gmail.com" className="hover:text-white transition-colors">turiatraventours@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="https://wa.me/917700964364" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2 rounded font-semibold transition-colors text-xs uppercase tracking-wider">
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Turiatraven Tours OPC Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
