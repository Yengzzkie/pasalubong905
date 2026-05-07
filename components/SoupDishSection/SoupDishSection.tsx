import Image from "next/image";
import soupDishes from "@/data/soup-dishes.json";

const SoupDishSection = () => {
  return (
    <section id="soup" className="mb-16 lg:mb-32 scroll-mt-50">
      <div className="text-center mb-16">
        <h2 className="noto-serif font-bold text-(--primary) text-3xl lg:text-5xl mb-4">
          Soup Bowls
        </h2>
        <p className="text-(--tertiary) max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde incidunt, ab nisi, impedit in iusto harum architecto, ut facilis error aperiam nihil dolorum eius a quibusdam non quisquam dolorem!
        </p>
      </div>

      {soupDishes.map((soup) => (
        <div key={soup.id} className="grid grid-cols-1 gap-8">
          <div className="p-8 border border-(--primary) flex flex-col md:flex-row justify-between items-center gap-6 mb-6 shadow-lg">
            <Image
              className="aspect-square w-36 h-36 object-cover"
              src={soup.image}
              width={1000}
              height={1000}
              alt="A photo of Heritage Adobo del Sur"
            />
            <div className="flex-1">
              <h3 className="noto-serif text-(--primary) text-2xl mb-2">{soup.name}</h3>
              <p className="text-(--tertiary) mb-4">
                {soup.description}
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl text-(--primary)">${soup.price}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SoupDishSection;
