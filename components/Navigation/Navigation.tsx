import Image from "next/image";
export default function Home() {

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "#" },
    { name: "Order Online", href: "#" },
    { name: "Login", href: "#" },
  ];

  return (
    <div>
      <nav className="bg-(--neutral) top-0 sticky z-50 pb-2 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-16 h-24 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-serif font-light tracking-[0.2em] text-orange-900">
            <Image src="/logo.png" alt="logo" width={250} height={250} />
          </div>
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-stone-500 font-medium uppercase text-xs tracking-tighter hover:text-orange-800 hover:tracking-widest  transition-all duration-300"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="font-label-sm text-label-sm uppercase tracking-widest hover:bg-(--primary) hover:text-(--neutral) transition-all border border-(--primary) px-8 py-3">
            Order Now
          </button>
        </div>
      </nav>
    </div>
  );
}
