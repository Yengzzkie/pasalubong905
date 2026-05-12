import Image from "next/image";
import refreshers from "@/data/refreshers.json";
import { RiDrinks2Line } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { GiIceCubes } from "react-icons/gi";

const Refreshers = () => {
  return (
    <section className="scroll-mt-32" id="refreshers">
      <div className="bg-stone-100 p-2 md:p-20">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="noto-serif text-(--primary) font-bold text-3xl text-center lg:text-left lg:text-5xl mb-3 lg:mb-6">
              Refreshers
            </h2>
            <p className="text-(--tertiary) text-center lg:text-left mb-8">
              Cool down with classic Filipino refreshers—from creamy halo-halo
              and silky taho to sweet gulaman and tropical mango treats.
              Perfectly made to satisfy cravings and beat the heat.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-(--primary)">
                  <MdOutlineStorefront />
                </span>
                <span className="font-label-sm uppercase">
                  Homemade Desserts
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-(--primary)">
                  <RiDrinks2Line />
                </span>
                <span className="font-label-sm uppercase">Fresh Fruit Shakes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-(--primary)"><GiIceCubes /></span>
                <span className="font-label-sm uppercase">Classic Street Refreshers</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 gap-10">
            <div className="mb-8">
              <h4 className="text-(--primary) border-b pb-2 mb-4">
                SIGNATURES
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 space-y-8 lg:space-y-10">
                {refreshers.map((refresher, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <Image
                      src={refresher.image}
                      alt="Tahanan House Blend"
                      className="w-30 h-auto drop-shadow-[0px_5px_3px_rgba(0,0,0,0.4)]"
                      width={100}
                      height={100}
                    />
                    <div>
                      <span className="noto-serif text-lg text-(--primary) block">
                        {refresher.name}
                      </span>
                      <span className="text-xs text-(--tertiary)">
                        {refresher.description}
                      </span>
                    </div>
                    <span className="self-start text-(--tertiary)">${refresher.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refreshers;
