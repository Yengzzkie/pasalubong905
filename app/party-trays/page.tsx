import { MdOutlineLayers, MdOutlineViewQuilt, MdGridView } from "react-icons/md";
import { Noto_Serif } from "next/font/google";
import FoodTrayTable from "@/components/FoodTrayTable/FoodTrayTable";
import PerPoundPieceTable from "@/components/PerPoundPieceTable/PerPoundPieceTable";
import porkTrays from "@/data/pork-trays.json";
import goatTrays from "@/data/goat-trays.json";
import seafoodTrays from "@/data/seafood-trays.json";
import riceNoodleTrays from "@/data/rice-noodles-trays.json";

const notoSerif = Noto_Serif({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const PartyTraysPage = () => {
  return (
    <div className="bg-(--primary-bg)">
      <main className="max-w-screen-2xl mx-auto px-16">

        {/* <!-- Hero Section --> */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-(--primary) uppercase tracking-[0.3em] mb-4 block">
              Modern Heritage Catering
            </span>
            <h1 className={`${notoSerif.className} text-(--primary) mb-8`}>
              Pasalubong905: Party Trays
            </h1>
            <p className="text-(--tertiary) leading-relaxed">
              Bring the soulful warmth of authentic Filipino heritage to your
              private celebrations. Our curated party trays are meticulously
              prepared with traditional techniques and pre-colonial
              inspirations, perfect for sharing the spirit of{" "}
              <span className="italic">tahanan</span> with your family and
              guests.
            </p>
          </div>
        </section>

        {/* <!-- Tray Sizes & Servings --> */}
        <section className="bg-[url('/pattern.svg')] mb-24">
          <div className="p-12 border border-(--neutral) relative overflow-hidden">
            <div className="absolute inset-0 banig-divider opacity-50 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className={`${notoSerif.className} text-(--primary) mb-12 text-center`}>
                Tray Sizes &amp; Servings Reference
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-(--primary)/30 rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-(--primary)">
                      <MdOutlineLayers />
                    </span>
                  </div>
                  <h3 className="uppercase mb-2">Small Tray</h3>
                  <p className="text-gray-500 mb-1 font-serif italic text-sm">
                    12.5&quot; x 10&quot; x 1.75&quot;
                  </p>
                  <p className="text-(--tertiary) noto-serif">
                    10-15 Servings
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-(--primary)/30 rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-(--primary)">
                      <MdOutlineViewQuilt />
                    </span>
                  </div>
                  <h3 className="uppercase mb-2">Medium Tray</h3>
                  <p className="text-gray-500 mb-1 font-serif italic text-sm">
                    12.5&quot; x 10&quot; x 2.50&quot;
                  </p>
                  <p className="text-(--tertiary) noto-serif">
                    20-30 Servings
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-(--primary)/30 rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-(--primary)">
                      <MdGridView />
                    </span>
                  </div>
                  <h3 className="uppercase mb-2">Large Tray</h3>
                  <p className="text-gray-500 mb-1 font-serif italic text-sm">
                    18.5&quot; x 14&quot; x 1.75&quot;
                  </p>
                  <p className="text-(--tertiary) noto-serif">
                    35-45 Servings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <!-- Menu Section --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* <!-- Image Feature --> */}
          {/* <div className="lg:col-span-5 sticky top-32 h-fit">
            <div className="aspect-[0.71] overflow-hidden bg-surface-container-high border border-outline-variant/30 p-2">
              <img
                alt="Traditional Filipino Party Trays"
                className="w-full h-full object-cover"
                data-alt="A beautifully arranged spread of large Filipino party trays featuring vibrant Adobong Baboy and Bicol Express on a rustic wooden table. The lighting is warm and cinematic, casting soft shadows that highlight the rich textures of the sauces and fresh garnishes. The setting is a modern, minimalist dining room with earthen clay pots and woven Banig mats in the background. The overall aesthetic is one of grounded luxury and cultural heritage."
                src="https://lh3.googleusercontent.com/aida/ADBb0uiCCgbVR6f4937aTN2DGiuVDtBX-nVCQdd9D_BmKGX9RKkkE4f8myArj-eYjsWlH5GbEMM_fkWUB88NrLRMPALfvyklcyySzALxMYNKs5J_VvEcQanjv2A2Flbamlycg0u0mDniW-lNB8KNeooj40X1uWg6ecjMZJMal8VXOOvtRebeFowLbVa8lGYJGXlQVHqdshSQW2W_GYscrGawqmOG18JgwANc4XQENeN8Nu5TchI-NKg_W9qjfgxcwjY_009L8uqxuVq_Gw"
              />
            </div>
          </div> */}
          {/* <!-- Price Lists --> */}
          <div className="lg:col-span-12">

            {/* <!-- Pork Dishes --> */}
            <div className="mb-20">
              <div className="flex items-center text-(--primary) gap-4 mb-8">
                <h2 className="font-bold border-l p-4">Pork</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={porkTrays} />
                <PerPoundPieceTable />
              </div>
            </div>

            {/* <!-- Goat Dishes --> */}
            <div className="mb-20">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Goat</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={goatTrays} />
                <PerPoundPieceTable />
              </div>
            </div>

            {/* <!-- Fish and Seafood Dishes --> */}
            <div className="mb-20">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Fish and Seafood</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={seafoodTrays} />
                <PerPoundPieceTable />
              </div>
            </div>

            {/* <!-- Rice and Noodles Dishes --> */}
            <div className="mb-20">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Rice and Noodles</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={riceNoodleTrays} />
                <PerPoundPieceTable />
              </div>
            </div>

            {/* <!-- Per Pound/Piece --> */}
            <div className="p-8 bg-(--secondary-bg) border-l-4 border-(--primary)">
              <h3 className="noto-serif text-(--primary) mb-6">
                Signature Selections
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-body-lg">Pork Belly Inihaw</span>
                  <span className="text-tertiary">
                    Market Price / lb
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-body-lg">Lechon Kawali</span>
                  <span className="text-tertiary">
                    $18.00 / lb
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-body-lg">Crispy Pata</span>
                  <span className="text-tertiary">
                    $22.00 / piece
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-body-lg">
                    Pork BBQ Skewers (25 pcs)
                  </span>
                  <span className="text-tertiary">$65.00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-body-lg">
                    Lumpiang Shanghai (50 pcs)
                  </span>
                  <span className="text-tertiary">$45.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Call to Action --> */}
      <section className="bg-(--primary) text-(--neutral) py-24 mb-24">
        <div className="max-w-7xl mx-auto px-16 text-center">
          <h2 className="mb-8">
            Host Your Next Gathering with Pasalubong905
          </h2>
          <p className="font-body-lg mb-12 opacity-90 max-w-2xl mx-auto">
            Please allow at least 48 hours notice for tray orders. Custom menus
            and full-service catering options are also available upon request.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              className="bg-(--neutral) text-(--primary) px-10 py-4 uppercase tracking-widest hover:bg-(--neutral)/80 transition-colors"
              href="#"
            >
              Place Order Now
            </a>
            <a
              className="bg-(--primary) border px-10 py-4 uppercase tracking-widest hover:bg-(--tertiary) transition-colors"
              href="#"
            >
              Download PDF Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyTraysPage;
