import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import { MdGrain } from "react-icons/md";
import FeaturedMenu from "@/components/FeaturedMenu/FeaturedMenu";
import PreFooterBanner from "@/components/PreFooterBanner/PreFooterBanner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      {/* <-- Inabel Divider --> */}
      <div className="w-full h-px bg-tertiary/20 inabel-pattern opacity-30 py-4"></div>

      <About />

      {/* <-- Grain Divider --> */}
      <div className="flex justify-center items-center gap-4 text-gray-500/40 py-12">
        <div className="h-px w-32 bg-current"></div>
        <span className="scale-150"><MdGrain /></span>
        <div className="h-px w-32 bg-current"></div>
      </div>


      <FeaturedMenu />
      <PreFooterBanner />
      <Footer />
    </div>
  );
}
