"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "./navData";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">

      <button
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <HiX size={28} />
        ) : (
          <HiMenu size={28} />
        )}
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-slate-950 border-t border-slate-700">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() =>
                setOpen(false)
              }
              className="block px-8 py-5 hover:bg-slate-900"
            >
              {item.name}
            </a>
          ))}

        </div>
      )}

    </div>
  );
}