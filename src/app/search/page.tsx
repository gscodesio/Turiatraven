import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { packagesData } from "@/data/packages";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const sp = await searchParams;
  const q = typeof sp.q === 'string' ? sp.q.toLowerCase() : '';
  const style = typeof sp.style === 'string' ? sp.style : '';
  const month = typeof sp.month === 'string' ? sp.month : '';

  const results = packagesData.filter((pkg) => {
    let match = true;
    if (q) {
      match = match && (
        pkg.title.toLowerCase().includes(q) ||
        pkg.category.toLowerCase().includes(q) ||
        pkg.desc.toLowerCase().includes(q)
      );
    }
    if (style && style !== 'all') {
      match = match && pkg.filters.includes(style);
    }
    return match;
  });

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-primary font-bold mb-4">Search Results</h1>
        <p className="text-gray-600 mb-12">
          Found {results.length} package{results.length !== 1 ? 's' : ''} 
          {q && ` for "${q}"`}
          {style && style !== 'all' && ` matching style "${style}"`}
          {month && ` in ${month}`}
        </p>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <div className="relative w-full aspect-video overflow-hidden shrink-0">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm">
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 self-end">
                    {pkg.category}
                  </span>
                  <h4 className="text-2xl font-primary font-bold mb-3">{pkg.title}</h4>
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2 text-gray-600">{pkg.desc}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-2 text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-5 mt-auto">
                    <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">{pkg.price}</p>
                    <div className="flex items-center gap-3">
                      <Link 
                        href={`/package/${pkg.id}`}
                        className="flex-1 bg-secondary hover:bg-primary text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-colors group/btn"
                      >
                        View Itinerary
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">No packages found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search filters to find more packages.</p>
            <Link href="/" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors inline-block">
              Go Back Home
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
