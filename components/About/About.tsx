import { Noto_Serif } from "next/font/google";
import Image from "next/image";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <section className="text-(--tertiary) py-10 lg:py-24 px-8 lg:px-16 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="md:col-span-5 space-y-8">
          <div className="font-bold inline-block px-4 py-1 border-l-2 border-primary">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              Our Story
            </span>
          </div>
          <h2
            className={`${notoSerif.className} text-4xl font-bold font-headline-lg text-headline-lg text-tertiary`}
          >
            Bringing people together through{" "}
            <span className="text-primary italic">Filipino comfort food</span>.
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
            <p>
              Inspired by the warmth of Filipino hospitality, our restaurant was
              created to be a welcoming space where family, friends, and
              community can gather over comforting meals and familiar flavors.
            </p>
            <p>
              From sizzling classics and hearty soups to traditional kakanin and
              street food favorites, every dish is prepared with care using
              recipes and flavors that celebrate the richness of Filipino
              culture and cuisine.
            </p>
          </div>
          {/* <div className="lg:pt-8">
            <a
              className="font-label-sm text-label-sm text-primary border-b-2 border-primary/30 pb-1 hover:border-primary transition-all"
              href="#"
            >
              READ OUR STORY
            </a>
          </div> */}
        </div>
        <div className="md:col-span-7 relative">
          <div className="aspect-4/5 md:aspect-16/10 overflow-hidden relative">
            <Image
              alt="Dining Area"
              className="w-full h-full object-cover grayscale-20 group-hover:scale-105 transition-transform duration-1000"
              width={1000}
              height={1000}
              src="/dining-area.jpg"
            />
            <div className="absolute inset-0 border-24p border-white/10 pointer-events-none"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-(--tertiary) text(--neutral) p-8 hidden md:block">
            <p className="font-display-lg text-xl text-white italic">
              &quot;Where Every Meal Feels Like Home&quot;
            </p>
            <p className="text-xs text-(--primary-light) uppercase tracking-[0.2em] mt-2">
              Filipino Dining Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
