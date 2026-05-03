import React from "react";

const PreFooterBanner = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 z-0">
        <img
          alt="Dining Atmosphere"
          className="w-full h-full object-cover brightness-[0.4]"
          data-alt="A close-up shot of a dimly lit, elegantly set dining table in a high-end restaurant. A single candle flickers, casting soft light onto polished silver cutlery and a woven linen napkin. The background shows the blur of other tables and the warm glow of the open kitchen. The mood is intimate, serene, and deeply welcoming, inviting the viewer into the Tahanan experience."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsHfH9vkjYPZn1QKKhQZF8ER_ssJ_14H6AJztynuUNBjTS-tofDbFOfxWCrni3zwPbTAPe9-4etcxiA_W4M2JiuHC34US7LObAnC8W57lEYRO5CaYTqZWYeeg_o9mAjRokkZedgarKmeUR7-mEvw5wNDXzI96RZLJhgP39ACXJzzV01uCGi82NcWlmuVXLcsdErPDOqLvlhlU-pJVnNA5ZFeqSIGO1dn7MeZxi8WPdN5293Fhb79nJGYSsAfudKx0BRcH4wDrdvyY"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-16">
        <h2 className="font-display-lg text-5xl mb-8">
          Begin your journey home.
        </h2>
        <p className="font-body-lg text-body-lg mb-12 opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius consectetur eum temporibus, iusto quam laudantium in eveniet quisquam ex commodi, culpa maiores autem minima sit natus, aperiam rem fuga.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-white text-(--primary) px-12 py-5 uppercase tracking-widest border border-white hover:bg-(--primary-light) transition-all">
            Order Online
          </button>
          <button className="border border-white text-white px-12 py-5 uppercase tracking-widest hover:bg-white hover:text-(--primary) transition-all">
            Contact US
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooterBanner;
