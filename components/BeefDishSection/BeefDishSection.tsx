import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import beefDishes from "@/data/beef-dishes.json";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const BeefDishSection = () => {
  return (
    <section className="mb-16 lg:mb-32 scroll-mt-50" id="beef-dishes">
      {/* <!-- Header --> */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center mb-16">
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
            className={`${notoSerif.className} font-bold text-(--primary) text-2xl lg:text-5xl mb-2 lg:mb-4`}
          >
            Beef Dishes
          </h2>
          <p className="text-xs lg:text-base">
            Small bites and starters designed to awaken the palate, inspired by
            roadside snacks and coastal harvests.
          </p>
        </div>
      </div>

      {/* BEEF SELECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3">
        {beefDishes.map((beef) => (
          <div key={beef.id} className="flex justify-between pb-6">
            <div className="flex items-center gap-4 border-b-2 border-(--primary) pl-4 pb-4 max-w-[80%]">
              <div className="w-20 lg:w-36 h-20 lg:h-36 shrink-0 overflow-hidden">
                <Image
                  className="w-full h-full object-cover drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]"
                  src={beef.image}
                  width={1000}
                  height={1000}
                  alt="A photo of group of filipino beef dishes"
                />
              </div>
              <div>
                <h3 className={`${notoSerif.className} text-(--primary) font-semibold text-xl mb-2`}>
                  {beef.name}
                </h3>
                <p className="text-xs text-(--tertiary) italic">{beef.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center mt-2 lg:mt-8">
              <div className="flex flex-col items-center">
                <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                  S
                </span>
                <span className="text-xs lg:text-base self-start text-(--primary)">
                  ${beef.price.small}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                  M
                </span>
                <span className="text-xs lg:text-base self-start text-(--primary)">
                  ${beef.price.medium}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                  L
                </span>
                <span className="text-xs lg:text-base self-start text-(--primary)">
                  ${beef.price.large}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeefDishSection;
