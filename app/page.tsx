"use client";

import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import FeaturedMenu from "@/components/FeaturedMenu/FeaturedMenu";
import PreFooterBanner from "@/components/PreFooterBanner/PreFooterBanner";
import GrainDivider from "@/components/ui/GrainDivider/GrainDivider";
import InabelDivider from "@/components/ui/InabelDivider/InabelDivider";

export default function Home() {
  return (
    <div>
      {/* <Navigation /> */}
      <Hero />

      {/* <-- Inabel Divider --> */}
      <InabelDivider />

      <About />

      {/* <-- Grain Divider --> */}
      <GrainDivider />
      {/* <-- Inabel Divider --> */}
      <div className="w-full h-px bg-tertiary/20 inabel-pattern opacity-30 py-4"></div>

      <FeaturedMenu />
      <PreFooterBanner />
    </div>
  );
}
