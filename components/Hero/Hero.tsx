import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { MdKeyboardArrowDown } from "react-icons/md";

  const beVietnamPro = Be_Vietnam_Pro({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });
  const notoSerif = Noto_Serif({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });
export default function Home() {

  return (
    <header className="relative h-230.25 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCifA8QfOVAhyrpQOa2ktRXetHc7Ne5McciHHTL9-_kTXsuG7tDKezox77qXQY93Q3nJP-_Q8Np1a68YzqXqnixep9ZLrOqTh6bcLiekHBe905NthlSzKpL47GN2lb7HhQN80-gRQ3RFV20NBUfrgV_p0Ph9WO912eHcyDu52OiOhv-ldAhunShz7Tu7zIY0br6zqaq42VgUezjfuIacGk65Ml9Vdamn-4dzp2DGgxyOSd7G2iIrE3YNYDkKo70GtVjpisGdZR5lWs"
          alt="Signature Tahanan Dish"
          className="w-full h-full object-cover brightness-50"
          data-alt="A macro shot of a signature Filipino fine dining dish featuring grilled seafood artfully placed on a dark volcanic stone plate. The setting is warm and moody, illuminated by soft golden candlelight that glints off a rich calamansi emulsion. The background is a blurred high-end restaurant interior with dark wood textures and stone walls, maintaining a sophisticated and culturally rich aesthetic."
          width={100}
          height={100}
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <p className={`${beVietnamPro.className} text-(--primary-light) tracking-[0.4em] uppercase mb-6`}>
          PASALUBONG905 | OSHAWA
        </p>
        <h1 className={`${notoSerif.className} text-7xl font-bold mb-12 max-w-4xl leading-22 text-shadow-[0_4px_10px_rgba(0,0,0,0.95)]`}>
          Elevated Filipino <span className="italic font-light">cuisine</span>{" "}
          crafted for the <span className="italic font-light">modern</span> table.
        </h1>
        <div className="flex justify-center">
          <button className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-500">
            <span className="bg-(--primary) px-12 py-5 uppercase tracking-widest shadow-lg">
              See More
            </span>
            <span className="text-white text-3xl animate-bounce">
              <MdKeyboardArrowDown />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
