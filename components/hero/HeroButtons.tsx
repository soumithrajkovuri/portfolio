import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex gap-5 mt-10">

        <a
        href="/resume/SoumithRaj_Kovuri.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-cyan-500
        px-6
        py-3
        font-semibold
        text-black
        transition
        hover:bg-cyan-400
        "
        >
        Download Resume
        </a>

    </div>


  );
}