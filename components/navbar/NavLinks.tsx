"use client";

import { navLinks } from "./navData";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-10">

      {navLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-slate-300 hover:text-cyan-400 transition"
        >
          {item.name}
        </a>
      ))}

    </div>
  );
}