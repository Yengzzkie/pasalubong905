import Image from "next/image";

const PreFooterBanner = () => {
  return (
    <section className="relative py-16 lg:py-32">
      <div className="absolute inset-0 z-0">
        <img
          alt="Dining Atmosphere"
          className="w-full h-full object-cover brightness-[0.4]"
          data-alt="A close-up shot of a dimly lit, elegantly set dining table in a high-end restaurant. A single candle flickers, casting soft light onto polished silver cutlery and a woven linen napkin. The background shows the blur of other tables and the warm glow of the open kitchen. The mood is intimate, serene, and deeply welcoming, inviting the viewer into the Tahanan experience."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsHfH9vkjYPZn1QKKhQZF8ER_ssJ_14H6AJztynuUNBjTS-tofDbFOfxWCrni3zwPbTAPe9-4etcxiA_W4M2JiuHC34US7LObAnC8W57lEYRO5CaYTqZWYeeg_o9mAjRokkZedgarKmeUR7-mEvw5wNDXzI96RZLJhgP39ACXJzzV01uCGi82NcWlmuVXLcsdErPDOqLvlhlU-pJVnNA5ZFeqSIGO1dn7MeZxi8WPdN5293Fhb79nJGYSsAfudKx0BRcH4wDrdvyY"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-8 lg:px-16">
        <h2 className="noto-serif font-semibold text-5xl mb-8">
          Begin your journey home.
        </h2>
        <p className="text-(--neutral) mb-12 opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eius consectetur eum temporibus, iusto quam laudantium in eveniet
          quisquam ex commodi, culpa maiores autem minima sit natus, aperiam rem
          fuga.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="flex flex-col items-center bg-white text-(--primary) px-12 py-5 uppercase tracking-widest border border-white hover:bg-(--primary-light) hover:border-(--primary-light) transition-all">
            <span>Order on</span>
            <Image
              src="/SkipTheDishes.png"
              alt="skipthedishes"
              width={100}
              height={100}
            />
          </button>
          <button className="flex flex-col items-center gap-2 bg-white text-(--primary) px-12 py-5 uppercase tracking-widest border border-white hover:bg-(--primary-light) hover:border-(--primary-light) transition-all">
            <span>Order on</span>
            <Image
              src="/UberEatsLogo.png"
              alt="ubereats"
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooterBanner;
