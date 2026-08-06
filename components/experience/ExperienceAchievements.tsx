"use client";

import { motion } from "framer-motion";

import {
  TbCircleCheck,
} from "react-icons/tb";

type Props = {
  achievements: string[];
};

export default function ExperienceAchievements({
  achievements,
}: Props) {
  return (
    <div className="mt-20">

      <div>

        <h3 className="text-3xl font-bold text-white">
          Business Impact
        </h3>

        <p className="mt-2 text-slate-400">
          Measurable outcomes delivered across cloud platforms.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-10">

        {achievements.map((item, index) => (

          <motion.div

            key={item}

            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: index * .08,
            }}

            whileHover={{
              x: 6,
            }}

            className="
              flex
              items-start
              gap-5
              rounded-2xl
              border
              border-slate-800
              bg-slate-950/50
              p-6
              transition
              duration-300
              hover:border-green-400
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-green-500/10
              "
            >

              <TbCircleCheck className="text-2xl text-green-400" />

            </div>

            <p
              className="
                text-slate-300
                leading-8
              "
            >

              {item}

            </p>

          </motion.div>

        ))}

      </div>

    </div>
  );
}