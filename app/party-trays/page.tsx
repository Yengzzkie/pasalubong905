import { MdOutlineLayers, MdOutlineViewQuilt, MdGridView } from "react-icons/md";
import { Noto_Serif } from "next/font/google";
import FoodTrayTable from "@/components/FoodTrayTable/FoodTrayTable";
import PerPoundPieceTable from "@/components/PerPoundPieceTable/PerPoundPieceTable";
import DessertsTrayTable from "@/components/DessertsTrayTable/DessertsTrayTable";
import InabelDivider from "@/components/ui/InabelDivider/InabelDivider";
import porkTrays from "@/data/trays/pork-trays.json";
import beefTrays from "@/data/trays/beef-trays.json";
import goatTrays from "@/data/trays/goat-trays.json";
import seafoodTrays from "@/data/trays/seafood-trays.json";
import vegetableTrays from "@/data/trays/vegetable-trays.json";
import riceNoodleTrays from "@/data/trays/rice-noodles-trays.json";
import chickenTrays from "@/data/trays/chicken-trays.json";
import porkPerPiece from "@/data/perpiece/pork-per-piece.json";
import seafoodPerPiece from "@/data/perpiece/seafood-per-piece.json";
import vegetablePerPiece from "@/data/perpiece/vegetable-per-piece.json";
import chickenPerPiece from "@/data/perpiece/chicken-per-piece.json";
import desserts from "@/data/perpiece/desserts.json";

const notoSerif = Noto_Serif({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const PartyTraysPage = () => {
  return (
    <div className="relative bg-(--primary-bg)">
      <main className="max-w-screen-2xl mx-auto px-4 lg:px-16">

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
        <section className="bg-[url('/pattern.svg')] mb-24 border border-(--primary-light)/10">
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
          {/* <!-- Price Lists --> */}
          <div className="lg:col-span-12">

            {/* <!-- Pork Dishes --> */}
            <div className="mb-10">
              <div className="flex items-center text-(--primary) gap-4 mb-8">
                <h2 className="font-bold border-l p-4">Pork Party Trays</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 overflow-x-auto">
                <FoodTrayTable itemData={porkTrays} />
                <PerPoundPieceTable itemData={porkPerPiece} />
              </div>
            </div>

            <InabelDivider />

            {/* <!-- Beef Dishes --> */}
            <div className="my-10">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Beef Party Trays</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={beefTrays} />
              </div>
            </div>

            <InabelDivider />

            {/* <!-- Fish and Seafood Dishes --> */}
            <div className="my-10">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Fish and Seafood Party Trays</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 overflow-x-auto">
                <FoodTrayTable itemData={seafoodTrays} />
                <PerPoundPieceTable itemData={seafoodPerPiece} />
              </div>
            </div>

            <InabelDivider />

            {/* <!-- Goat Dishes --> */}
            <div className="my-10">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Goat Party Trays</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={goatTrays} />
              </div>
            </div>

            <InabelDivider />

            {/* <!-- Vegetable Dishes --> */}
            <div className="my-10">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Vegetable Party Trays</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 overflow-x-auto">
                <FoodTrayTable itemData={vegetableTrays} />
                <PerPoundPieceTable itemData={vegetablePerPiece} />
              </div>
            </div>

            <InabelDivider />

            {/* <!-- Rice and Noodles Dishes --> */}
            <div className="my-10">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Rice and Noodles Party Trays</h2>
              </div>
              <div className="flex gap-12 overflow-x-auto">
                <FoodTrayTable itemData={riceNoodleTrays} />
              </div>
            </div>

            <InabelDivider />

            {/* <!-- Chicken Dishes --> */}
            <div className="my-10">
              <div className="flex items-center gap-4 text-(--primary) mb-8">
                <h2 className="font-bold border-l p-4">Chicken Party Trays</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 overflow-x-auto">
                <FoodTrayTable itemData={chickenTrays} />
                <PerPoundPieceTable itemData={chickenPerPiece} />
              </div>
            </div>

            <InabelDivider />

            <DessertsTrayTable itemData={desserts} />
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
            <a className="bg-(--neutral) text-(--primary) px-10 py-4 uppercase tracking-widest hover:bg-(--neutral)/80 transition-colors" href="#">
              Place Order Now
            </a>
            <a className="bg-(--primary) border px-10 py-4 uppercase tracking-widest hover:bg-(--tertiary) transition-colors" href="#">
              Download PDF Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyTraysPage;
