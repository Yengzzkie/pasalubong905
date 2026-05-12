"use client";

import { Noto_Serif } from "next/font/google";
import GrainDivider from "@/components/ui/GrainDivider/GrainDivider";
import InabelDivider from "@/components/ui/InabelDivider/InabelDivider";
import BeefDishSection from "@/components/BeefDishSection/BeefDishSection";
import ChickenDishSection from "@/components/ChickenDishSection/ChickenDishSection";
import PorkDishSection from "@/components/PorkDishSection/PorkDishSection";
import FishDishSection from "@/components/FishDishSection/FishDishSection";
import VegetableDishSection from "@/components/VegetableDishSection/VegetableDishSection";
import Refreshers from "@/components/Refreshers/Refreshers";
import SoupDishSection from "@/components/SoupDishSection/SoupDishSection";
import DessertsSection from "@/components/DessertsSection/DessertsSection";
import SidesSection from "@/components/SidesSection/SidesSection";
import PancitComboSection from "@/components/PancitComboSection/PancitComboSection";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const MenuPage = () => {
  const menuNav = [
    {
      id: 1,
      name: "Beef",
      link: "beef-dishes",
    },
    {
      id: 2,
      name: "Chicken",
      link: "chicken-dishes",
    },
    {
      id: 3,
      name: "Pork",
      link: "pork-dishes",
    },
    {
      id: 4,
      name: "Seafood",
      link: "seafood-dishes",
    },
    {
      id: 5,
      name: "Veggies",
      link: "vegetable-dishes",
    },
    {
      id: 6,
      name: "Soup Bowls",
      link: "soup",
    },
    {
      id: 7,
      name: "Sides",
      link: "sides",
    },
    {
      id: 8,
      name: "Desserts",
      link: "desserts",
    },
    {
      id: 9,
      name: "Refreshers",
      link: "refreshers",
    },
  ];

  return (
    <div className="relative">
      <div className="banig-pattern" />
      <main className="relative max-w-full w-full lg:max-w-screen-2xl mx-auto px-4 lg:px-16 pt-12 lg:pt-24 pb-12 lg:pb-32 z-10">
        {/* <!-- Header Section --> */}
        <header className="mb-12 lg:mb-24 text-center">
          <span className="text-(--primary) text-xs lg:text-sm uppercase tracking-[0.4em] block mb-2 lg:mb-4">
            Fine Dining Selection
          </span>
          <h1
            className={`${notoSerif.className} text-3xl lg:text-7xl font-bold mb-4 lg:mb-8`}
          >
            Our Curated Menu
          </h1>
          <div className="bg-(--primary) w-24 h-px mx-auto mb-4 lg:mb-8"></div>
          <p className="text-xs lg:text-base max-w-2xl mx-auto font-body-lg leading-relaxed">
            A curated journey through the Philippine archipelago, reimagining
            traditional flavors with modern techniques and artisanal ingredients
            sourced from local heritage farmers.
          </p>
        </header>

        {/* <!-- Menu Navigation (Anchor Links) --> */}
        <div className="lg:sticky top-24 left-0 flex flex-wrap lg:flex-row justify-center gap-4 lg:gap-12 backdrop-blur-lg backdrop-saturate-150 bg-white/30 lg:shadow-lg mb-10 lg:mb-20 border-y border-white/10 py-6 z-10">
          {menuNav.map((link) => (
            <a
              key={link.id}
              className="uppercase tracking-widest hover:underline hover:text-(--primary) transition-all"
              href={`#${link.link}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* <!-- Section: BEEF DISHES --> */}
        <BeefDishSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: Chicken Dishes --> */}
        <ChickenDishSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: PORK DISHES --> */}
        <PorkDishSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: FISH DISHES --> */}
        <FishDishSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: VEGETABLE DISHES --> */}
        <VegetableDishSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: SOUP BOWLS --> */}
        <SoupDishSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: PANCIT COMBO --> */}
        <PancitComboSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: SIDES --> */}
        <SidesSection />

        <InabelDivider />
        <GrainDivider />

        {/* <!-- Section: DESSERTS --> */}
        <DessertsSection />

        {/* <!-- Section: Refreshers --> */}
        <Refreshers />
      </main>
    </div>
  );
};

export default MenuPage;
