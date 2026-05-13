import Image from "next/image";
import sizzlingPlates from "@/data/sizzling-plates.json";

const SizzlingSection = () => {
  return (
    <section id="sizzling-plates" className="mb-16 lg:mb-32 scroll-mt-50">
      <div className="text-center mb-16">
        <h2 className="noto-serif font-bold text-(--primary) text-3xl lg:text-5xl mb-4">
          Sizzling Plates
        </h2>
        <p className="text-(--tertiary) max-w-xl mx-auto">
          Signature Filipino sizzling dishes crafted with bold flavors, fresh
          ingredients, and served piping hot.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {sizzlingPlates.map((sizzling) => (
          <div key={sizzling.id} className="grid grid-cols-1 gap-8">
            <div className="p-8 border border-(--primary) flex flex-col justify-between items-center gap-6 mb-6 shadow-lg">
              <Image
                className="w-50 object-cover drop-shadow-[3px_3px_5px_rgba(0,0,0,0.5)]"
                src={sizzling.image}
                width={1000}
                height={1000}
                alt={sizzling.name}
              />
              <div className="flex-1">
                <h3 className="noto-serif text-(--primary) text-2xl mb-2">
                  {sizzling.name}
                </h3>
                <p className="text-(--tertiary) mb-4">{sizzling.description}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl text-(--primary)">
                  ${sizzling.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SizzlingSection;
