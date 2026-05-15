import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import porkDishes from "@/data/pork-dishes.json";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

type porkDishProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: {
    small: string;
    medium: string;
    large: string;
  };
  isSingleServe: boolean;
  singleServePrice: string;
  UOM: string | null;
};

const PorkDishSection = () => {
  return (
    <section className="mb-16 lg:mb-32 scroll-mt-50" id="pork-dishes">
      {/* <!-- Header --> */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center mb-16">
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
          <h2
            className={`${notoSerif.className} font-bold text-(--primary) text-2xl lg:text-5xl mb-2 lg:mb-4`}
          >
            Pork Dishes
          </h2>
          <p className="text-xs lg:text-base text-(--tertiary)">
            Classic Filipino pork dishes packed with bold savory flavors, tender
            cuts, and comforting recipes inspired by family-style cooking.
          </p>
        </div>
      </div>

      {/* PORK SELECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3">
        {porkDishes.map((pork) => (
          <div key={pork.id} className="flex justify-between pb-6">
            <div className="flex items-center gap-4 border-b-2 border-(--primary) pb-4 max-w-[80%]">
              <div className="w-20 lg:w-36 h-20 lg:h-36 shrink-0 overflow-hidden">
                <Image
                  className="w-full h-full object-cover drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]"
                  src={pork.image}
                  width={1000}
                  height={1000}
                  alt={pork.name}
                />
              </div>
              <div>
                <h3
                  className={`${notoSerif.className} text-(--primary) font-semibold text-xl mb-2`}
                >
                  {pork.name}
                </h3>
                <p className="text-xs text-(--tertiary) italic">
                  {pork.description}
                </p>
              </div>
            </div>

            {pork.isSingleServe
              ? perPiecePrice(pork)
              : multiSizeServingPrice(pork)}
          </div>
        ))}
      </div>
    </section>
  );
};

const perPiecePrice = (pork: porkDishProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="flex items-center justify-center bg-(--primary) text-(--primary-light) text-[8px] lg:text-sm text-center rounded-lg mb-1 px-1 lg:px-2 py-0.5 lg:py-1">
        Per Serving
      </span>
      <span className="text-xs lg:text-base text-(--primary)">
        ${pork.singleServePrice} / {pork.UOM}
      </span>
    </div>
  );
};

const multiSizeServingPrice = (pork: porkDishProps) => {
  return (
    <div className="flex flex-col gap-2 items-center mt-2 lg:mt-8">
      <div className="flex flex-col items-center">
        <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
          S
        </span>
        <span className="text-xs lg:text-base self-start text-(--primary)">
          ${pork.price.small}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
          M
        </span>
        <span className="text-xs lg:text-base self-start text-(--primary)">
          ${pork.price.medium}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
          L
        </span>
        <span className="text-xs lg:text-base self-start text-(--primary)">
          ${pork.price.large}
        </span>
      </div>
    </div>
  );
};

export default PorkDishSection;
