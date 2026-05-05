import { Noto_Serif } from "next/font/google";

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
              Our Heritage
            </span>
          </div>
          <h2
            className={`${notoSerif.className} text-4xl font-bold font-headline-lg text-headline-lg text-tertiary`}
          >
            More than a restaurant, it is a{" "}
            <span className="text-primary italic">Tahanan</span>.
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
            <p>
              Rooted in the Tagalog word for &quot;home,&quot; TAHANAN is a
              sanctuary where pre-colonial Filipino traditions meet the
              precision of modern gastronomy. Our journey began with a simple
              desire: to honor the complex flavors of our ancestors through
              artisanal craftsmanship.
            </p>
            <p>
              Every corner of our space is curated with hand-carved Narra wood,
              woven Inabel textiles, and volcanic stone from the Bicol region,
              creating a tactile bridge between the past and the present.
            </p>
          </div>
          <div className="lg:pt-8">
            <a
              className="font-label-sm text-label-sm text-primary border-b-2 border-primary/30 pb-1 hover:border-primary transition-all"
              href="#"
            >
              READ OUR STORY
            </a>
          </div>
        </div>
        <div className="md:col-span-7 relative">
          <div className="aspect-4/5 md:aspect-16/10 overflow-hidden relative">
            <img
              alt="Tahanan Interior"
              className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
              data-alt="A wide interior view of an upscale Filipino heritage restaurant featuring heavy Narra wood ceiling beams and hand-woven Banig wall accents. Large windows look out onto a lush tropical garden at dusk, while the interior is bathed in warm, focused pin-lights on pristine linen-covered tables. The aesthetic is tactile minimalism, emphasizing natural textures and architectural shadows."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBET40qm2J6D3xjNIhE_HU1qRYh2LBJID-A14yVCPkoCh34rMrWMD3UfKmP07fS8u1U7fwpAMrXLTrVnnAT899mOAwQm_rK5iDEu6eJFt1qongXlGFNxei2Hs2AT8X0IvcetV53OJKUzdb02gEiuKHzf95ByEUsM3yg9T2Z9WM8oIfuFe1jnVPVd-uyU5lB-19J_WorxPCWM0pW9pgrYd5iiT0Vde_Fo4odv26gVG2n9gkvv4p3cmMfcvgV-IL9KXkjBJ_iDcuDOVo"
            />
            <div className="absolute inset-0 border-24p border-white/10 pointer-events-none"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-(--tertiary) text(--neutral) p-12 hidden md:block">
            <p className="font-display-lg text-3xl text-white italic">
              &quot;Pagkain at Pamilya&quot;
            </p>
            <p className="text-xs text-(--primary-light) uppercase tracking-[0.2em] mt-2">
              Food and Family
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
