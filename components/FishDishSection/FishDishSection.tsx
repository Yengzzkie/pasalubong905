import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import beefDishes from "@/data/beef-dishes.json";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ChickenDishSection = () => {
  return (
    <section className="mb-32 scroll-mt-32" id="chicken-dishes">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 flex-row-reverse">
        <div className="md:col-span-5 order-2 md:order-1 text-right">
          <h2 className={`${notoSerif.className} font-bold text-(--primary) text-5xl mb-4`}>
            Fish Dishes
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
                <h3 className={`${notoSerif.className} font-semibold text-xl mb-2`}>
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
    </section>
  );
};

export default ChickenDishSection;
