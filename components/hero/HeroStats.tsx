"use client";

import {
  FaAws,
  FaServer,
} from "react-icons/fa";

import {
  TbActivityHeartbeat,
} from "react-icons/tb";

import {
  IoStatsChart,
} from "react-icons/io5";

const stats = [
  {
    value: "3+",
    label: "Years Experience",
    icon: TbActivityHeartbeat,
  },
  {
    value: "30+",
    label: "Microservices",
    icon: FaServer,
  },
  {
    value: "15+",
    label: "AWS Services",
    icon: FaAws,
  },
  {
    value: "99.9%",
    label: "Availability",
    icon: IoStatsChart,
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              group
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/60
              backdrop-blur-md
              p-5
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-xl
              hover:shadow-cyan-500/20
            "
          >
            <Icon className="mb-4 text-3xl text-cyan-400 transition group-hover:scale-110" />

            <h2 className="text-3xl font-bold text-white">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}