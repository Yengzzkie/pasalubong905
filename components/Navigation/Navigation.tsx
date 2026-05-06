"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Party Trays", href: "/party-trays" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="bg-(--neutral) sticky top-0 z-50 border-b border-black/5">
      <div className="flex justify-between items-center w-full px-6 md:px-16 h-24 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="logo" width={180} height={180} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  text-xs font-medium uppercase transition-all duration-300
                  ${
                    isActive
                      ? "text-orange-900 tracking-widest underline underline-offset-4"
                      : "text-stone-500 hover:text-orange-800 hover:tracking-widest"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block uppercase border border-(--primary) px-8 py-3 hover:bg-(--primary) hover:text-(--neutral) transition-all">
          Order Now
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-(--primary)"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-screen border-t border-black/5" : "max-h-0"}
        `}
      >
        <div className="flex flex-col px-6 py-6 bg-(--neutral)">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  py-4 border-b border-black/5 uppercase text-sm transition-all
                  ${
                    isActive
                      ? "text-orange-900 font-semibold"
                      : "text-stone-500 hover:text-orange-800"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <button className="mt-6 uppercase border border-(--primary) px-6 py-3 hover:bg-(--primary) hover:text-(--neutral) transition-all">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}