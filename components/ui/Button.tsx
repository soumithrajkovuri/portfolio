"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
      : "border border-cyan-500 hover:bg-cyan-500";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}