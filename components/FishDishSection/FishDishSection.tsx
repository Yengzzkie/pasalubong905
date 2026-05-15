import Image from "next/image";
import fishDishes from "@/data/fish-dishes.json";

type fishDishProps = {
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
};

const ChickenDishSection = () => {
  return (
    <section className="mb-16 lg:mb-32 scroll-mt-50" id="seafood-dishes">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center mb-16 flex-row-reverse">
        <div className="md:col-span-5 order-2 md:order-1 text-right">
          <h2 className="noto-serif font-bold text-(--primary) text-2xl lg:text-5xl mb-2 lg:mb-4">
            Fish Dishes
          </h2>
          <p className="text-xs lg:text-base text-(--tertiary)">
            Light yet flavorful Filipino seafood dishes prepared with fresh
            fish, local herbs, and traditional cooking styles from coastal
            regions.
          </p>
        </div>
        <div className="md:col-span-7 aspect-16/7 overflow-hidden order-1 md:order-2">
          <Image
            className="w-full h-full object-cover"
            src="/fish-dishes/fish-dishes.png"
            width={1000}
            height={1000}
            alt="A photo of group of filipino fish dishes"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3">
        {fishDishes.map((fish: fishDishProps) => (
          <div key={fish.id} className="flex justify-between pb-6">
            <div className="flex items-center gap-4 border-b-2 border-(--primary) pb-4 max-w-[80%]">
              <div className="w-20 lg:w-36 h-20 lg:h-36 shrink-0 overflow-hidden">
                <Image
                  className="w-full h-full object-cover drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]"
                  src={fish.image}
                  width={1000}
                  height={1000}
                  alt={fish.name}
                />
              </div>
              <div>
                <h3 className="noto-serif text-(--primary) font-semibold text-xl mb-2">
                  {fish.name}
                </h3>
                <p className="text-xs text-(--tertiary) italic">
                  {fish.description}
                </p>
              </div>
            </div>
            {fish.isSingleServe
              ? singleServePrice(fish)
              : multiSizeServingPrice(fish)}
          </div>
        ))}
      </div>
    </section>
  );
};

const singleServePrice = (fish: fishDishProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="flex items-center justify-center bg-(--primary) text-(--primary-light) text-[8px] lg:text-sm text-center rounded-lg mb-1 px-1 lg:px-2 py-0.5 lg:py-1">
        Per Serving
      </span>
      <span className="text-xs lg:text-base text-(--primary)">
        ${fish.singleServePrice}
      </span>
    </div>
  );
};

const multiSizeServingPrice = (fish: fishDishProps) => {
  return (
    <div className="flex flex-col gap-2 items-center mt-2 lg:mt-8">
      {fish.price.small && (
        <div className="flex flex-col items-center">
          <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
            S
          </span>
          <span className="text-xs lg:text-base self-start text-(--primary)">
            ${fish.price.small || null}
          </span>
        </div>
      )}
      <div className="flex flex-col items-center">
        <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
          M
        </span>
        <span className="text-xs lg:text-base self-start text-(--primary)">
          ${fish.price.medium || null}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="w-6 aspect-square flex items-center justify-center bg-(--primary) text-(--primary-light)">
          L
        </span>
        <span className="text-xs lg:text-base self-start text-(--primary)">
          ${fish.price.large || null}
        </span>
      </div>
    </div>
  );
};

export default ChickenDishSection;
