import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-100 full-width py-20 border-t border-stone-200 z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-16 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-serif tracking-widest text-orange-900">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={250} height={250} />
            </Link>
          </div>

          <p className="text-stone-500 font-serif text-sm uppercase tracking-widest leading-loose">
            210 Bond St W Unit A <br />
            Oshawa, Ontario <br />
            L1J 2L7
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
            Connect
          </h4>

          <ul className="space-y-4 font-serif text-sm uppercase tracking-widest">
            <li>
              <a className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all" href="https://www.instagram.com/pasalubong.905/" target="_blank">
                Instagram
              </a>
            </li>

            <li>
              <a className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all" href="https://www.facebook.com/p/Pasalubong-905-100088693986963/" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
            Inquiries
          </h4>

          <ul className="space-y-4 font-serif text-sm uppercase tracking-widest">
            <li>
              <a className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all" href="tel:+19057200800">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all" href="mailto:pasalubong.905@gmail.com">
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
            Hours
          </h4>

          <p className="text-stone-500 font-serif text-sm uppercase tracking-widest">
            Mon — Tue <br />
            10:30 AM — 7:00 PM <br />
            Wed — Fri <br />
            10:30 AM — 8:00 PM <br />
            Sat - Sun <br />
            9:00 AM — 8:00 PM <br />
          </p>
        </div>
      </div>

      <div className="px-16 max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-stone-200">
        <p className="text-[10px] font-serif tracking-[0.2em] text-stone-600 uppercase">
          © {new Date().getFullYear()} SEO and Design by <span className="font-semibold"><a href="https://www.facebook.com/yengzzkie/" target="_blank">Manuel Gatchalian</a></span>. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;