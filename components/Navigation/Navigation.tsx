"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Party Trays", href: "/party-trays" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="bg-(--neutral) sticky top-0 z-50 pb-2">
      <div className="flex justify-between items-center w-full px-16 h-24 max-w-screen-2xl mx-auto">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={250} height={250} />
        </Link>

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
                  ${isActive
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

        <button className="uppercase border border-(--primary) px-8 py-3 hover:bg-(--primary) hover:text-(--neutral)">
          Order Now
        </button>
      </div>
    </nav>
  );
}
