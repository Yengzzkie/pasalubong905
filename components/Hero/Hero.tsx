"use client";

import Link from "next/link";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

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
    <header className="relative h-150.25 lg:h-230.25 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/front-counter.jpg"
          alt="Signature Tahanan Dish"
          className="w-full h-full object-cover brightness-40"
          data-alt="A macro shot of a signature Filipino fine dining dish featuring grilled seafood artfully placed on a dark volcanic stone plate. The setting is warm and moody, illuminated by soft golden candlelight that glints off a rich calamansi emulsion. The background is a blurred high-end restaurant interior with dark wood textures and stone walls, maintaining a sophisticated and culturally rich aesthetic."
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <p className={`${beVietnamPro.className} text-(--primary-light) text-sm lg:text-lg tracking-[0.4em] uppercase mb-6`}>
          PASALUBONG905 | OSHAWA
        </p>
        <h1 className={`${notoSerif.className} text-4xl lg:text-7xl font-bold mb-12 max-w-4xl leading-14 lg:leading-22 text-shadow-[0_4px_10px_rgba(0,0,0,0.95)]`}>
          Elevated Filipino <span className="italic font-light">cuisine</span>{" "}
          crafted for the <span className="italic font-light">modern</span> table.
        </h1>
        <div className="flex justify-center">
          <Link href="/menu">
            <button className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-500">
              <span className="bg-(--primary) px-12 py-5 uppercase tracking-widest shadow-lg">
                See our menu
              </span>
              <span className="text-white text-3xl animate-bounce">
                <MdKeyboardArrowDown />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
