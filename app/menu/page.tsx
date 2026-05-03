"use client";

import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import beefDishes from "@/data/beef-dishes.json";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const page = () => {
  const menuNav = [
    {
      id: 1,
      name: "Beef Dishes",
      link: "beef-dishes",
    },
    {
      id: 2,
      name: "Chicken Dishes",
      link: "chicken-dishes",
    },
    {
      id: 3,
      name: "Pork Dishes",
      link: "pork-dishes",
    },
    {
      id: 4,
      name: "Desserts",
      link: "desserts",
    },
    {
      id: 5,
      name: "Beverages",
      link: "beverages",
    },
  ];

  return (
    <div className="relative">
      <div className="banig-pattern" />
      <main className="relative max-w-screen-2xl mx-auto px-16 pt-24 pb-32 z-10">
        {/* <!-- Header Section --> */}
        <header className="mb-24 text-center">
          <span className="text-(--primary) uppercase tracking-[0.4em] block mb-4">
            Fine Dining Selection
          </span>
          <h1 className={`${notoSerif.className} text-7xl font-bold mb-8`}>
            Our Curated Menu
          </h1>
          <div className="bg-(--primary) w-24 h-px mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto font-body-lg text-on-surface-variant leading-relaxed">
            A curated journey through the Philippine archipelago, reimagining
            traditional flavors with modern techniques and artisanal ingredients
            sourced from local heritage farmers.
          </p>
        </header>

        {/* <!-- Menu Navigation (Anchor Links) --> */}
        <div className="sticky top-1 left-0 flex justify-center gap-12 backdrop-blur-lg backdrop-saturate-150 bg-white/30 shadow-lg mb-20 border-y border-white/10 py-6 z-10">
          {menuNav.map((link) => (
            <a
              key={link.id}
              className="uppercase tracking-widest text-shadow-[-1px_1px_3px_#56361b73] hover:text-(--primary) transition-colors"
              href={`#${link.link}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* <!-- Section: BEEF DISHES --> */}
        <section className="mb-32 scroll-mt-32" id="beef-dishes">
          {/* <!-- Header --> */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
            <div className="md:col-span-7 aspect-16/7 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/beef-dishes/beef-dishes.png"
                width={1000}
                height={1000}
                alt="A photo of group of filipino beef dishes"
              />
            </div>
            <div className="md:col-span-5">
              <h2
                className={`${notoSerif.className} font-bold text-(--primary) text-5xl mb-4`}
              >
                Beef Dishes
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Small bites and starters designed to awaken the palate, inspired
                by roadside snacks and coastal harvests.
              </p>
            </div>
          </div>

          {/* BEEF SELECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {beefDishes.map((beef) => (
              <div key={beef.id} className="flex justify-between pb-6">
                <div className="flex beefs-center gap-4 border-b-2 border-(--primary) pl-4 max-w-[80%]">
                  <div className="w-24 h-24 shrink-0 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={beef.image}
                      width={1000}
                      height={1000}
                      alt="A photo of group of filipino beef dishes"
                    />
                  </div>
                  <div>
                    <h3
                      className={`${notoSerif.className} font-semibold text-xl mb-2`}
                    >
                      {beef.name}
                    </h3>
                    <p className="text-xs italic">{beef.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      S
                    </span>
                    <span className="self-start text-(--primary)">
                      ${beef.price.small}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      M
                    </span>
                    <span className="self-start text-(--primary)">
                      ${beef.price.medium}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      L
                    </span>
                    <span className="self-start text-(--primary)">
                      ${beef.price.large}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <!-- Section: Chicken Dishes --> */}
        <section className="mb-32 scroll-mt-32" id="chicken-dishes">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 flex-row-reverse">
            <div className="md:col-span-5 order-2 md:order-1 text-right">
              <h2
                className={`${notoSerif.className} font-bold text-(--primary) text-5xl mb-4`}
              >
                Chicken Dishes
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Hearty main courses that celebrate the diversity of regional
                Philippine slow-cooking traditions.
              </p>
            </div>
            <div className="md:col-span-7 aspect-16/7 overflow-hidden order-1 md:order-2">
              <Image
                className="w-full h-full object-cover"
                src="/chicken-dishes.png"
                width={1000}
                height={1000}
                alt="A photo of group of filipino chicken dishes"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {beefDishes.map((chicken) => (
              <div key={chicken.id} className="flex justify-between pb-6">
                <div className="flex chickens-center gap-4 border-b-2 border-(--primary) pb-4 max-w-[80%]">
                  <div className="shadow-[0px_0px_7px_0px_rgba(0,0,1,0.5)] w-24 h-24 shrink-0 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src="/beef-dishes.png"
                      width={1000}
                      height={1000}
                      alt="A photo of group of filipino beef dishes"
                    />
                  </div>
                  <div>
                    <h3
                      className={`${notoSerif.className} font-semibold text-xl mb-2`}
                    >
                      {chicken.name}
                    </h3>
                    <p className="text-xs italic">{chicken.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      S
                    </span>
                    <span className="self-start text-(--primary)">
                      ${chicken.price.small}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      M
                    </span>
                    <span className="self-start text-(--primary)">
                      ${chicken.price.medium}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      L
                    </span>
                    <span className="self-start text-(--primary)">
                      ${chicken.price.large}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 gap-8">
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex-1">
                <h3 className="font-headline-md text-2xl mb-2">
                  Heritage Adobo del Sur
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4">
                  Slow-braised organic pork belly in a 10-year aged vinegar and
                  artisanal soy, served with roasted garlic confit and mountain
                  rice.
                </p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-label-sm px-2 py-1 bg-secondary-container text-on-secondary-container rounded-full">
                    SIGNATURE
                  </span>
                  <span className="text-[10px] font-label-sm px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full">
                    LOCALLY SOURCED
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-display-lg text-3xl text-primary">
                  ₱1,250
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex-1">
                <h3 className="font-headline-md text-2xl mb-2">
                  Bicol Express Confitted Duck
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4">
                  Crispy duck leg confit in a velvety spicy coconut cream,
                  ginger-scented taro leaves, and fresh siling haba.
                </p>
              </div>
              <div className="text-right">
                <span className="font-display-lg text-3xl text-primary">
                  ₱1,480
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex-1">
                <h3 className="font-headline-md text-2xl mb-2">
                  Short Rib Kare-Kare
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4">
                  48-hour sous vide beef short rib in a rich house-made peanut
                  sauce, served with fermented shrimp bagoong and organic
                  vegetables.
                </p>
              </div>
              <div className="text-right">
                <span className="font-display-lg text-3xl text-primary">
                  ₱1,650
                </span>
              </div>
            </div>
          </div> */}
        </section>

        {/* PORK SELECTION */}
        <section className="mb-32 scroll-mt-32" id="pork-dishes">
          {/* <!-- Header --> */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
            <div className="md:col-span-7 aspect-16/7 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/beef-dishes/beef-dishes.png"
                width={1000}
                height={1000}
                alt="A photo of group of filipino beef dishes"
              />
            </div>
            <div className="md:col-span-5">
              <h2
                className={`${notoSerif.className} font-bold text-(--primary) text-5xl mb-4`}
              >
                Pork Dishes
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Small bites and starters designed to awaken the palate, inspired
                by roadside snacks and coastal harvests.
              </p>
            </div>
          </div>

          {/* BEEF SELECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {beefDishes.map((beef) => (
              <div key={beef.id} className="flex justify-between pb-6">
                <div className="flex beefs-center gap-4 border-b-2 border-(--primary) pl-4 max-w-[80%]">
                  <div className="w-24 h-24 shrink-0 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={beef.image}
                      width={1000}
                      height={1000}
                      alt="A photo of group of filipino beef dishes"
                    />
                  </div>
                  <div>
                    <h3
                      className={`${notoSerif.className} font-semibold text-xl mb-2`}
                    >
                      {beef.name}
                    </h3>
                    <p className="text-xs italic">{beef.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      S
                    </span>
                    <span className="self-start text-(--primary)">
                      ${beef.price.small}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      M
                    </span>
                    <span className="self-start text-(--primary)">
                      ${beef.price.medium}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                      L
                    </span>
                    <span className="self-start text-(--primary)">
                      ${beef.price.large}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <!-- Section: Panghimagas --> */}
        <section className="mb-32 scroll-mt-32" id="panghimagas">
          <div className="text-center mb-16">
            <h2
              className={`${notoSerif.className} font-bold text-(--primary) text-5xl mb-4`}
            >
              Panghimagas (Desserts)
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Sweet endings crafted from local chocolates, tropical fruits, and
              traditional heirloom rice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="An elegant dessert plate featuring a deconstructed leche flan with gold leaf, surrounded by dots of mango purée and edible flowers. The dessert is presented on a textured cream ceramic plate. The lighting is crisp and editorial, showcasing the vibrant yellow and orange tones of the dish against a minimalist light background."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZe8oZBpQi5uB54GGp1J7H9oHwXP4PZIc0DJx0lDuxaKxY88aS28LPsM1mjYmQXf4yro9e1cvyJd4h1x_xEurg2yJzyWDUzJuwjkZ_CC6M8oRZHGHudRuCFocKgFAVyAx0eb4vZkJG8Qo_St2dF69KbKcTqLM9_nbssrlff7K3t6CcMBPIZQTASAIxUkAUXKAwRkrd0HaoAWTY7Rdt52C1hYVX9UWLGwWreE8o66p29d8BwWDd9-7DH3NOT7Ajjq9Y7-fsvMUzwmE"
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">
                Queso de Bola Cheesecake
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-3">
                Creamy cheesecake infused with aged Edam cheese, topped with
                local honey and barquillos crumble.
              </p>
              <span className="font-label-sm text-primary">₱420</span>
            </div>
            <div className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="A dark chocolate ganache cake made with 70% Malagos chocolate, garnished with sea salt and a dollop of coconut cream. The image captures a moody, decadent vibe with deep brown textures and a soft focus on a gold-rimmed plate, reflecting the high-end Filipino heritage brand aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8fHewvr4UqcLQHwc5Gd24bNitvPOZE_KxvYxbnFCcLzkIkZqAUdlk1IHU2kbNZKzwsouY5n_3A7u_HGip3J00MDzaycWswxAW6K8KNRdVPaKB7LZYkk212hnpQ7g4-VfaMaCe_fO20kbz3fnZB0UKLXaoPYcmRg9TVzR9gU-DHQ6UkfugGY5ZPeWIX1iq3FfBKiJQ1iBTzfpIzXuPareAse_fqBtdpop0Pu7qBNifwd-f3DwS11FtgDnWjJ6Te4wwyV93CGBczOs"
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">
                Malagos Dark Chocolate Mousse
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-3">
                Award-winning Davao dark chocolate, sea salt, and a dash of
                Batangas coffee-infused cream.
              </p>
              <span className="font-label-sm text-primary">₱450</span>
            </div>
            <div className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Fresh tropical fruit sorbet served in a hollowed-out dragon fruit shell, garnished with sprigs of fresh mint. The colors are bright and natural, set against a backdrop of tropical leaves and soft natural light, conveying a sense of freshness and refined island living."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAusshk-pdDMp0QbiD5C1YhGwbCoojhg6mqyiWFofO4l85V8JgOXHj0jGE0-Z8SvRFBiouqzdUVpKcCmriZlLoqwOqgv-ncWCvJOr14NhTkwBGYjt1uqkp-CvaLkmSGXJn-nBF25MYla6yC2cgJYYi8iNT7H2BXXF7IcrAFVcIkuTw38L1Tqzg7rBsEEktNPoppQjdtdzTsKPmm1gPFe8Cmw24g2ZePoCFOQ-Aa9EG9txNLW-bHA5z1hYrT3_9AxxoFXPsjlIIzpeY"
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">
                Mango &amp; Coconut Sorbetes
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-3">
                Artisanal dairy-free sorbet made from Guimaras mangoes and fresh
                coconut milk.
              </p>
              <span className="font-label-sm text-primary">₱380</span>
            </div>
          </div>
        </section>
        {/* <!-- Section: Inumin --> */}
        <section className="scroll-mt-32" id="inumin">
          <div className="bg-stone-100 p-12 md:p-20">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                  Inumin
                </h2>
                <p className="font-body-md text-on-surface-variant mb-8">
                  Curated beverages including heritage coffee, artisanal teas,
                  and house-made tropical infusions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      local_cafe
                    </span>
                    <span className="font-label-sm uppercase">
                      Coffee &amp; Tea
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      liquor
                    </span>
                    <span className="font-label-sm uppercase">
                      Signature Cocktails
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      wine_bar
                    </span>
                    <span className="font-label-sm uppercase">
                      Wine Selection
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="mb-8">
                    <h4 className="font-label-sm text-primary border-b border-outline-variant pb-2 mb-4">
                      SIGNATURES
                    </h4>
                    <ul className="space-y-6">
                      <li className="flex justify-between items-baseline">
                        <div>
                          <span className="font-headline-md text-lg block">
                            Tahanan House Blend
                          </span>
                          <span className="text-xs text-on-surface-variant font-body-md">
                            Cold-pressed calamansi and honey ginger
                          </span>
                        </div>
                        <span className="font-label-sm">₱220</span>
                      </li>
                      <li className="flex justify-between items-baseline">
                        <div>
                          <span className="font-headline-md text-lg block">
                            Hibiscus &amp; Roselle Tea
                          </span>
                          <span className="text-xs text-on-surface-variant font-body-md">
                            Locally grown roselle, chilled
                          </span>
                        </div>
                        <span className="font-label-sm">₱180</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mb-8">
                    <h4 className="font-label-sm text-primary border-b border-outline-variant pb-2 mb-4">
                      CRAFT COCKTAILS
                    </h4>
                    <ul className="space-y-6">
                      <li className="flex justify-between items-baseline">
                        <div>
                          <span className="font-headline-md text-lg block">
                            The Galleon
                          </span>
                          <span className="text-xs text-on-surface-variant font-body-md">
                            Aged rum, tamarind reduction, and spice
                          </span>
                        </div>
                        <span className="font-label-sm">₱450</span>
                      </li>
                      <li className="flex justify-between items-baseline">
                        <div>
                          <span className="font-headline-md text-lg block">
                            Sampaguita Martini
                          </span>
                          <span className="text-xs text-on-surface-variant font-body-md">
                            Gin infused with fragrant sampaguita
                          </span>
                        </div>
                        <span className="font-label-sm">₱480</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
