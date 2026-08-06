import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-wide"
    >
      <span className="text-cyan-400">
        Soumith
      </span>

      <span className="text-white">
        .
      </span>
    </Link>
  );
}