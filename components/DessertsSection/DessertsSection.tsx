import Image from "next/image"

const DessertsSection = () => {
  return (
    <section className="mb-16 lg:mb-32 scroll-mt-50" id="desserts">
          <div className="text-center mb-16">
            <h2
              className="noto-serif font-bold text-(--primary) text-3xl lg:text-5xl mb-4"
            >
              Panghimagas (Desserts)
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Sweet endings crafted from local chocolates, tropical fruits, and
              traditional heirloom rice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 drop-shadow-[5px_5px_6px_rgba(0,0,0,0.25)]"
                  alt="turon"
                  src="/desserts/TURON.png"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">
                Turon
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-3">
                Creamy cheesecake infused with aged Edam cheese, topped with
                local honey and barquillos crumble.
              </p>
              <span className="font-label-sm text-primary">₱420</span>
            </div>
            <div className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="turon"
                  src="/desserts/TURON.png"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">
                Malagos Dark Chocolate Mousse
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-3">
                Award-winning Davao dark chocolate, sea salt, and a dash of
                Batangas coffee-infused cream.
              </p>
              <span className="font-label-sm text-primary">₱450</span>
            </div>
            <div className="group">
              <div className="aspect-square overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="turon"
                  src="/desserts/TURON.png"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1">
                Mango &amp; Coconut Sorbetes
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-3">
                Artisanal dairy-free sorbet made from Guimaras mangoes and fresh
                coconut milk.
              </p>
              <span className="font-label-sm text-primary">₱380</span>
            </div>
          </div>
        </section>
  )
}

export default DessertsSection