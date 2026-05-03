import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const notoSerif = Noto_Serif({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});


const FeaturedMenu = () => {
  return (
    <section className="bg-(--secondary-bg) text-(--tertiary) py-32 px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-(--secondary) font-bold uppercase tracking-[0.3em] block mb-4">
              The Curated Table
            </span>
            <h2 className={`${notoSerif.className} text-5xl font-bold text-tertiary`}>
              Seasonally inspired, <br />
              ancestrally rooted.
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 border border-outline flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors">
              <span className="material-symbols-outlined"><FaArrowLeft /></span>
            </button>
            <button className="w-12 h-12 border border-outline flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors">
              <span className="material-symbols-outlined"><FaArrowRight /></span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Menu Item 1 */}
          <div className="group">
            <div className="aspect-square bg-stone-200 mb-8 overflow-hidden relative">
              <img
                alt="Adobo Confit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="An artisanal presentation of Adobo Confit on a textured ceramic plate of earth tones. The dish features a perfectly crisped duck leg glazed in a dark, glossy soy-vinegar reduction, garnished with micro-greens and fried garlic chips. The lighting is high-key with soft shadows, highlighting the rich textures of the meat and the handcrafted plate."
                src="/618808436_910181301948328_108844109515198654_n.jpg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                <span className="font-label-sm text-xs text-primary uppercase">
                  Boodle Fight
                </span>
              </div>
            </div>
            <h3 className={`${notoSerif.className} text-3xl font-bold text-(--tertiary) mb-3`}>
              Adobo Confit
            </h3>
            <p className="font-body-md mb-6 line-clamp-3">
              48-hour slow-cooked duck leg in a reduction of artisanal cane
              vinegar, soy, and peppercorn, served over a bed of heirloom
              black rice from the Cordilleras.
            </p>
            <div className="bg-(--accent) h-px w-full mb-6"></div>
            <span className="font-semibold text-(--primary) tracking-widest">
              PHP 1,250
            </span>
          </div>
          {/* Menu Item 2 */}
          <div className="group">
            <div className="aspect-square bg-stone-200 mb-8 overflow-hidden relative">
              <img
                alt="Kare-Kare Risotto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Modern Kare-Kare Risotto served in a shallow Narra wood bowl. The risotto is a vibrant ochre color from annatto and roasted peanuts, topped with sous-vide beef short rib and vibrant green string bean curls. A dollop of fermented shrimp paste foam adds a modern molecular touch. Set against a minimalist parchment-colored background with warm side-lighting."
                src="/kakanin-platter.png"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                <span className="font-label-sm text-xs text-primary uppercase">
                  Kakanin Platter
                </span>
              </div>
            </div>
            <h3 className={`${notoSerif.className} text-3xl font-bold text-(--tertiary) mb-3`}>
              Kare-Kare Risotto
            </h3>
            <p className="font-body-md mb-6 line-clamp-3">
              Carnaroli rice infused with roasted peanuts and annatto, topped
              with sous-vide beef short rib and bagoong alamang foam.
            </p>
            <div className="bg-(--accent) h-px w-full mb-6"></div>
            <span className="font-semibold text-(--primary) tracking-widest">
              PHP 1,450
            </span>
          </div>
          {/* Menu Item 3 */}
          <div className="group">
            <div className="aspect-square bg-stone-200 mb-8 overflow-hidden relative">
              <img
                alt="Halo-Halo Glace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A deconstructed Halo-Halo dessert presented in a crystal clear glass sphere. Layers of purple yam mousse, leche flan cubes, and jackfruit gelée are visible, topped with a delicate spun-sugar nest. The scene is lit with cool moonlight tones to emphasize the crystalline textures of the ice and glass, contrasted with the warmth of the dessert's colors."
                src="/halo-halo.png"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                <span className="font-label-sm text-xs text-primary uppercase">
                  Dessert
                </span>
              </div>
            </div>
            <h3 className={`${notoSerif.className} text-3xl font-bold text-(--tertiary) mb-3`}>
              Halo-Halo 
            </h3>
            <p className="font-body-md mb-6 line-clamp-3">
              A deconstructed take on the classNameic Filipino dessert,
              featuring Ube Halaya mousse, leche flan spheres, and
              nitrogen-frozen coconut milk shards.
            </p>
            <div className="bg-(--accent) h-px w-full mb-6"></div>
            <span className="font-semibold text-(--primary) tracking-widest">
              PHP 850
            </span>
          </div>
        </div>
        <div className="mt-24 text-center">
          <button className="border border-tertiary px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-tertiary hover:text-white transition-all">
            Explore Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
