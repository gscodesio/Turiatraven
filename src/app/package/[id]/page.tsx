import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock, MessageCircle, MapPin } from "lucide-react";
import { packagesData } from "@/data/packages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "./ScrollToTop";

export default async function PackagePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const pkg = packagesData.find((p) => p.id === resolvedParams.id);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background-alt selection:bg-primary/20 selection:text-secondary">
      <ScrollToTop />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full mt-[80px]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <Link 
              href="/#packages" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Packages
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                {pkg.category}
              </span>
              <span className="flex items-center text-white/90 text-sm font-semibold">
                <Clock className="w-4 h-4 mr-1.5" />
                {pkg.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-primary font-bold text-white mb-4">
              {pkg.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {pkg.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Content: Itinerary */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-primary font-bold text-secondary mb-8">Detailed Itinerary</h2>
              <div className="space-y-8">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {/* Vertical Line */}
                    {index !== pkg.itinerary.length - 1 && (
                      <div className="absolute top-10 left-6 w-[2px] h-[calc(100%+1rem)] bg-gray-200" />
                    )}
                    
                    {/* Day Circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">
                        Day<br/><span className="text-xs leading-none block text-center">{day.day}</span>
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 mb-4">
                      <h3 className="text-xl font-bold text-secondary mb-3">{day.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: Inclusions & Price */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                
                {/* Highlights */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-secondary mb-6">Package Highlights</h3>
                  <ul className="space-y-4">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="font-semibold">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-secondary mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                        <Check size={18} className="text-[#25D366] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Box */}
                <div className="bg-secondary p-8 rounded-2xl shadow-xl text-center">
                  <p className="text-sm font-bold text-white/70 uppercase tracking-wider mb-2">Starting Price</p>
                  <p className="text-3xl font-primary font-bold text-white mb-6">{pkg.price}</p>
                  <p className="text-xs text-white/70 mb-8">100% bespoke — we tailor pricing to your group & preferences</p>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://wa.me/919594992125" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle size={20} />
                      WhatsApp Us Now
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
