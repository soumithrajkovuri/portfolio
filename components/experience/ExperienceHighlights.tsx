"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Props = {
  highlights: Highlight[];
};

export default function ExperienceHighlights({
  highlights,
}: Props) {
  return (
    <div className="mt-16">

      <div className="flex items-center justify-between">

        <h3 className="text-3xl font-bold text-white">
          Engineering Highlights
        </h3>

        <span className="text-cyan-400 text-sm uppercase tracking-widest">
          Core Responsibilities
        </span>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {highlights.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}

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
                delay: index * 0.1,
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
                bg-slate-950/50
                p-8
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/20
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-500/10
                  blur-3xl
                "
              />

              <div
                className="
                  flex
                  items-center
                  justify-center
                  h-14
                  w-14
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                "
              >

                <Icon className="text-cyan-400 text-3xl" />

              </div>

              <h4 className="mt-8 text-xl font-bold text-white">

                {item.title}

              </h4>

              <p
                className="
                  mt-4
                  leading-8
                  text-slate-400
                "
              >

                {item.description}

              </p>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}