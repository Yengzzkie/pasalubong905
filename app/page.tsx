import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
export default function Home() {

  return (
    <div>
      <Navigation />
      <Hero />
      {/* <-- Inabel Divider --> */}
      <div className="w-full h-px bg-tertiary/20 inabel-pattern opacity-30 py-4"></div>
    </div>
  );
}
