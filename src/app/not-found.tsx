import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-32 text-center mt-12">
        <div className="bg-primary/10 p-6 rounded-full text-primary mb-8 animate-bounce">
          <Compass size={64} strokeWidth={1.5} />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4 font-primary">
          Oops! You've wandered off the map.
        </h2>
        
        <p className="text-gray-600 max-w-lg mx-auto mb-10 text-lg">
          The destination you are looking for doesn't exist, has been moved, or is currently unavailable. 
          Let's get you back on track to your next great journey!
        </p>
        
        <Link 
          href="/" 
          className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
        >
          Return Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}
