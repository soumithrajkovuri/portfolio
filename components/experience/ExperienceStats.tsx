"use client";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import {
  TbBolt,
  TbServer,
  TbCloud,
  TbActivityHeartbeat,
} from "react-icons/tb";

type Props = {
  stats: {
    value: string;
    label: string;
  }[];
};

const icons = [
  TbBolt,
  TbActivityHeartbeat,
  TbServer,
  TbCloud,
];

export default function ExperienceStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      {stats.map((item, index) => {

        const Icon = icons[index];

        const number = parseFloat(item.value);

        return (

          <motion.div

            key={item.label}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: index * 0.15,
            }}

            whileHover={{
              y: -8,
            }}

            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-950/60
              p-7
              transition-all
              duration-300
              hover:border-cyan-400
              hover:shadow-2xl
              hover:shadow-cyan-500/20
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                -top-12
                right-0
                h-32
                w-32
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            <Icon
              className="
                text-4xl
                text-cyan-400
                mb-6
              "
            />

            <h2
              className="
                text-5xl
                font-bold
                text-white
              "
            >

              <CountUp

                end={number}

                duration={2}

              />

              {item.value.includes("%") && "%"}

              {item.value.includes("+") && "+"}

            </h2>

            <p
              className="
                mt-3
                text-slate-400
                font-medium
              "
            >

              {item.label}

            </p>

          </motion.div>

        );

      })}

    </div>
  );
}