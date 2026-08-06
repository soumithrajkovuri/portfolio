"use client";

import Image from "next/image";

interface Props {
  title: string;
  image: string;
  description: string;
  
}

export default function ArchitectureCard({
  title,
  image,
  description,

}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur transition duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

      <div className="relative w-full bg-black">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-8">
          {description}
        </p>

        
      </div>

    </div>
  );
}