import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-100 full-width py-20 border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-16 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-serif tracking-widest text-orange-900">
            TAHANAN
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
              <a
                className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all"
                href="#"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all"
                href="#"
              >
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
              <a
                className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all"
                href="#"
              >
                Our Philosophy
              </a>
            </li>
            <li>
              <a
                className="text-stone-500 hover:text-orange-900 underline decoration-stone-300 transition-all"
                href="#"
              >
                Hours &amp; Location
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
            Hours
          </h4>
          <p className="text-stone-500 font-serif text-sm uppercase tracking-widest">
            Mon — Sat <br />
            10:30 AM — 8:00 PM <br />
            Sunday <br />
            9:30 AM — 7:00 PM <br />
          </p>
        </div>
      </div>
      <div className="px-16 max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-stone-200">
        <p className="text-[10px] font-serif tracking-[0.2em] text-stone-600 uppercase">
          © {new Date().getFullYear()} SEO and Design by Manuel Gatchalian. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
