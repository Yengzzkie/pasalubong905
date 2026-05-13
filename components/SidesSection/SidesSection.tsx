import Image from "next/image";
import sides from "@/data/sides.json";

type sidesProps = {
  name: string;
  image: string;
  description: string;
  price: string;
}

const SidesSection = () => {
  return (
    <section className="mb-16 lg:mb-32 scroll-mt-50" id="sides">
      <div className="text-center mb-8 lg:mb-16">
        <h2 className="noto-serif font-bold text-(--primary) text-3xl lg:text-5xl mb-4">
          Sides
        </h2>
        <p className="text-(--tertiary) max-w-xl mx-auto">
          A variety of traditional Filipino sides featuring crispy, grilled, and
          savory street food classics made for pairing or sharing.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
        {sides.map((side: sidesProps, index) => (
          <div key={index} className="group">
            <div className="aspect-square overflow-hidden lg:mb-6">
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 drop-shadow-[5px_5px_6px_rgba(0,0,0,0.25)]"
                alt="turon"
                src={side.image}
                width={1000}
                height={1000}
              />
            </div>
            <h3 className="text-(--primary) text-lg lg:text-xl mb-1">
              {side.name}
            </h3>
            <p className="text-(--tertiary) text-xs lg:text-sm text-on-surface-variant lg:mb-3">
              {side.description}
            </p>
            <span className="text-base font-bold text-(--primary)">${side.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidesSection;
