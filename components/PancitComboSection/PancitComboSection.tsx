import Image from "next/image";
import pancitCombo from "@/data/pancitcombo.json";

const PancitComboSection = () => {
  return (
    <section id="pancit-combo" className="mb-16 lg:mb-32 scroll-mt-50">
      <div className="text-center mb-16">
        <h2 className="noto-serif font-bold text-(--primary) text-3xl lg:text-5xl mb-4">
          Pancit Combo
        </h2>
        <p className="text-(--tertiary) max-w-xl mx-auto">
          Classic Filipino pancit paired with your favorite sides for a complete
          and satisfying meal.
        </p>
      </div>

      {pancitCombo.map((pancit) => (
        <div key={pancit.id} className="grid grid-cols-1 gap-8">
          <div className="p-8 border border-(--primary) flex flex-col md:flex-row justify-between items-center gap-6 mb-6 shadow-lg">
            <Image
              className="aspect-square w-36 h-36 object-cover drop-shadow-[3px_3px_5px_rgba(0,0,0,0.5)]"
              src={pancit.image}
              width={1000}
              height={1000}
              alt="A photo of Heritage Adobo del Sur"
            />
            <div className="flex-1">
              <h3 className="noto-serif text-(--primary) text-2xl mb-2">
                {pancit.name}
              </h3>
              <p className="text-(--tertiary) mb-4">{pancit.description}</p>
            </div>
            <div className="text-right">
              <span className="text-3xl text-(--primary)">${pancit.price}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PancitComboSection;
