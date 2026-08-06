"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="p-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
    >
      {theme === "dark" ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}