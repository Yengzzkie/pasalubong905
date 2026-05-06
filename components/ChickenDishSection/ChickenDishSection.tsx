import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import chickenDishes from "@/data/chicken-dishes.json";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ChickenDishSection = () => {
  return (
    <section className="mb-32 scroll-mt-32" id="chicken-dishes">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 flex-row-reverse">
        <div className="md:col-span-5 order-2 md:order-1 text-right">
          <h2 className={`${notoSerif.className} font-bold text-(--primary) text-2xl lg:text-5xl mb-2 lg:mb-4`}>
            Chicken Dishes
          </h2>
          <p className="text-xs lg:text-base">
            Hearty main courses that celebrate the diversity of regional
            Philippine slow-cooking traditions.
          </p>
        </div>
        <div className="md:col-span-7 aspect-16/7 overflow-hidden order-1 md:order-2">
          <Image
            className="w-full h-full object-cover"
            src="/chicken-dishes/chicken-dishes.png"
            width={1000}
            height={1000}
            alt="A photo of group of filipino chicken dishes"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {chickenDishes.map((chicken) => (
          <div key={chicken.id} className="flex justify-between pb-6">
            <div className="flex items-center gap-4 border-b-2 border-(--primary) pb-4 max-w-[80%]">
              <div className="w-20 lg:w-36 h-20 lg:h-36 shrink-0 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={chicken.image}
                  width={1000}
                  height={1000}
                  alt={chicken.name}
                />
              </div>
              <div>
                <h3 className={`${notoSerif.className} font-semibold text-xl mb-2`}>
                  {chicken.name}
                </h3>
                <p className="text-xs italic">{chicken.description}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-2 lg:mt-8">
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
    </section>
  );
};

export default ChickenDishSection;
