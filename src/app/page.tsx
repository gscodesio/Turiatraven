import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Introduction from "@/components/Introduction";
import Destinations from "@/components/Destinations";
import FeaturedPackages from "@/components/FeaturedPackages";
import TrendingPackages from "@/components/TrendingPackages";
import Services from "@/components/Services";
import SignatureExperience from "@/components/SignatureExperience";
import HowItWorks from "@/components/HowItWorks";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  // Dynamically read all videos from public/videos
  const videosDir = path.join(process.cwd(), "public", "videos");
  let videoPaths: string[] = [];
  try {
    if (fs.existsSync(videosDir)) {
      const files = fs.readdirSync(videosDir);
      videoPaths = files
        .filter((file) => file.endsWith(".mp4") || file.endsWith(".webm"))
        .map((file) => `/videos/${file}`);
    }
  } catch (error) {
    console.error("Failed to read videos directory", error);
  }

  // Fallback if no videos are found
  if (videoPaths.length === 0) {
    videoPaths = ["/videos/video1.mp4"];
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero videos={videoPaths} />
      <TrustBar />
      <Introduction />
      <Destinations />
      <FeaturedPackages />
      <TrendingPackages />
      <Services />
      <SignatureExperience />
      <HowItWorks />
      <BrandStory />
      <Testimonials />
      <Journal />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </main>
  );
}
