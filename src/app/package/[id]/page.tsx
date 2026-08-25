import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock, MessageCircle, MapPin, Plane, X } from "lucide-react";
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

                {/* Flights Details */}
                {pkg.flights && pkg.flights.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                      <Plane size={20} className="text-primary" /> Flight Details
                    </h3>
                    <div className="space-y-3">
                      {pkg.flights.map((flight, i) => {
                        const parts = flight.split("|");
                        if (parts.length >= 3) {
                          return (
                            <div key={i} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-sm text-secondary">{parts[0].trim()}</span>
                                <span className="text-xs font-semibold text-primary">{parts[2].trim()}</span>
                              </div>
                              <p className="text-xs text-text-secondary">{parts[1].trim()}</p>
                            </div>
                          );
                        }
                        return (
                          <div key={i} className="text-sm text-text-secondary border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                            {flight}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

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

                {/* Exclusions */}
                {pkg.exclusions && pkg.exclusions.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-secondary mb-6">What's Excluded</h3>
                    <ul className="space-y-3">
                      {pkg.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                          <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing Box */}
                <div className="bg-secondary p-8 rounded-2xl shadow-xl text-center text-white">
                  {pkg.pricingDetails ? (
                    <div className="text-left mb-6">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Starting from</p>
                      <p className="text-3xl font-primary font-bold mb-6">{pkg.price}</p>
                      
                      <div className="border-t border-white/10 pt-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/70">Booking Amount:</span>
                          <span className="font-bold">{pkg.pricingDetails.bookingAmount}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2">
                          <span className="text-white/70">Double Sharing:</span>
                          <span className="font-bold">{pkg.pricingDetails.doubleShare}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2">
                          <span className="text-white/70">Triple Sharing:</span>
                          <span className="font-bold">{pkg.pricingDetails.tripleShare}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2">
                          <span className="text-white/70">Child (6-12 yrs):</span>
                          <span className="font-bold">{pkg.pricingDetails.child6to12}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2">
                          <span className="text-white/70">Child (2-6 yrs):</span>
                          <span className="font-bold">{pkg.pricingDetails.child2to6}</span>
                        </div>
                      </div>
                      
                      {pkg.availableDates && pkg.availableDates.length > 0 && (
                        <div className="border-t border-white/10 pt-4 mt-6">
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Available Dates</p>
                          <div className="inline-block bg-white/10 px-3 py-1.5 rounded-lg text-sm font-semibold border border-white/10">
                            {pkg.availableDates.join(", ")}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <p className="text-2xl font-primary font-bold mb-4">{pkg.price}</p>
                      <p className="text-sm text-white/80 mb-8">Contact us to receive a custom quote tailored to your travel preferences.</p>
                    </>
                  )}
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href={`https://wa.me/919594992125?text=Hi!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`}
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
