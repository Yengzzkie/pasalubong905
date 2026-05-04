import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import porkDishes from "@/data/pork-dishes.json";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const PorkDishSection = () => {
  return (
    <section className="mb-32 scroll-mt-32" id="pork-dishes">
      {/* <!-- Header --> */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
        <div className="md:col-span-7 aspect-16/7 overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/pork-dishes/pork-dishes.png"
            width={1000}
            height={1000}
            alt="A photo of group of filipino pork dishes"
          />
        </div>
        <div className="md:col-span-5">
          <h2 className={`${notoSerif.className} font-bold text-(--primary) text-5xl mb-4`}>
            Pork Dishes
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Small bites and starters designed to awaken the palate, inspired by
            roadside snacks and coastal harvests.
          </p>
        </div>
      </div>

      {/* PORK SELECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {porkDishes.map((pork) => (
          <div key={pork.id} className="flex justify-between pb-6">
            <div className="flex items-center gap-4 border-b-2 border-(--primary) pl-4 max-w-[80%]">
              <div className="w-24 h-24 shrink-0 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={pork.image}
                  width={1000}
                  height={1000}
                  alt={pork.name}
                />
              </div>
              <div>
                <h3 className={`${notoSerif.className} font-semibold text-xl mb-2`}>
                  {pork.name}
                </h3>
                <p className="text-xs italic">{pork.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                  S
                </span>
                <span className="self-start text-(--primary)">
                  ${pork.price.small}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                  M
                </span>
                <span className="self-start text-(--primary)">
                  ${pork.price.medium}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
                  L
                </span>
                <span className="self-start text-(--primary)">
                  ${pork.price.large}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PorkDishSection;
