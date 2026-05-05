"use client";

import Link from "next/link";
import { Noto_Serif } from "next/font/google";
import Carousel from "../ui/Carousel/Carousel";
import featuredItems from "@/data/featuredItems.json"

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const FeaturedMenu = () => {

  return (
    <section className="bg-(--secondary-bg) text-(--tertiary) py-16 lg:py-32 px-8 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-10 lg:mb-20">
          <div>
            <span className="text-(--secondary) font-bold uppercase tracking-[0.3em] block mb-4">
              The Curated Table
            </span>
            <h2 className={`${notoSerif.className} text-5xl font-bold text-tertiary`}>
              Seasonally inspired, <br />
              ancestrally rooted.
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <Carousel items={featuredItems} />

        <Link href="/menu">
          <button className="text-(--tertiary) block mx-auto border border-(--tertiary) px-8 py-3 mt-16 hover:bg-(--tertiary) hover:text-(--neutral) transition-all duration-300 cursor-pointer">
            <span className="font-bold uppercase tracking-wider block">
              Explore Full Menu
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedMenu;
