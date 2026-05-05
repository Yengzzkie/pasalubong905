"use client";

import { Noto_Serif } from "next/font/google";
import Carousel from "../ui/Carousel/Carousel";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const menuItems = [
  {
    name: "Boodle Fight",
    category: "Boodle Fight",
    image: "/618808436_910181301948328_108844109515198654_n.jpg",
    description: "48-hour slow-cooked duck leg with cane vinegar and soy.",
    price: "CAD 28",
  },
  {
    name: "Kakakanin Platter",
    category: "Main",
    image: "/kakanin-platter.png",
    description: "Peanut-infused risotto with beef short rib.",
    price: "CAD 32",
  },
  {
    name: "Halo-Halo",
    category: "Dessert",
    image: "/halo-halo.png",
    description: "Refined Filipino dessert with ube and leche flan.",
    price: "CAD 16",
  },
  {
    name: "Sizzling Bangus Sisig",
    category: "Sizzling",
    image: "/SIZZLING BANGUS SISIG.png",
    description: "Crispy croquettes with sisig and calamansi aioli.",
    price: "CAD 18",
  },
  {
    name: "Sizzling Crispy Sisig",
    category: "Sizzling",
    image: "/SIZZLING CRISPY SISIG.png",
    description: "Charcoal-grilled chicken with annatto marinade.",
    price: "CAD 24",
  },
];


const FeaturedMenu = () => {

  return (
    <section className="bg-(--secondary-bg) text-(--tertiary) py-16 lg:py-32 px-8 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
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
        <Carousel items={menuItems} />
      </div>
    </section>
  );
};

export default FeaturedMenu;
