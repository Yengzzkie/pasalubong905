"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const menuItems = [
  {
    title: "Adobo Confit",
    category: "Boodle Fight",
    image: "/618808436_910181301948328_108844109515198654_n.jpg",
    description: "48-hour slow-cooked duck leg with cane vinegar and soy.",
    price: "CAD 28",
  },
  {
    title: "Kare-Kare Risotto",
    category: "Main",
    image: "/kakanin-platter.png",
    description: "Peanut-infused risotto with beef short rib.",
    price: "CAD 32",
  },
  {
    title: "Halo-Halo",
    category: "Dessert",
    image: "/halo-halo.png",
    description: "Refined Filipino dessert with ube and leche flan.",
    price: "CAD 16",
  },
  {
    title: "Sisig Croquettes",
    category: "Appetizer",
    image: "/halo-halo.png",
    description: "Crispy croquettes with sisig and calamansi aioli.",
    price: "CAD 18",
  },
  {
    title: "Inasal Chicken",
    category: "Grill",
    image: "/kakanin-platter.png",
    description: "Charcoal-grilled chicken with annatto marinade.",
    price: "CAD 24",
  },
];

const ITEM_WIDTH = 100 / 3; // 3 items visible

const FeaturedMenu = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? menuItems.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= menuItems.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="bg-(--secondary-bg) text-(--tertiary) py-32 px-16">
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

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border flex items-center justify-center hover:bg-tertiary hover:text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border flex items-center justify-center hover:bg-tertiary hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${index * ITEM_WIDTH}%)`,
            }}
          >
            {menuItems.map((item, i) => (
              <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-6">
                <div className="group">
                  <div className="aspect-square bg-stone-200 mb-8 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <h3
                    className={`${notoSerif.className} text-2xl font-bold mb-3`}
                  >
                    {item.title}
                  </h3>

                  <p className="mb-4">{item.description}</p>

                  <span className="font-semibold text-(--primary)">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
