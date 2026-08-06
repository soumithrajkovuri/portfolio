"use client";

import { motion } from "framer-motion";
import { TbCalendar, TbMapPin, TbBriefcase } from "react-icons/tb";

type Props = {
  company: string;
  role: string;
  period: string;
  location: string;
};

export default function ExperienceHeader({
  company,
  role,
  period,
  location,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10">

      {/* LEFT */}

      <div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-500/10
          px-5
          py-2
        "
        >
          <TbBriefcase className="text-cyan-400 text-xl" />

          <span className="font-semibold text-cyan-400">

            {company}

          </span>

          <span
            className="
            rounded-full
            bg-green-500/20
            px-3
            py-1
            text-xs
            font-semibold
            text-green-400
          "
          >
            ACTIVE
          </span>

        </motion.div>

        <h2 className="mt-6 text-4xl font-bold text-white">

          {role}

        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">

          Designing and operating highly available cloud-native
          platforms using AWS, Kubernetes, Terraform,
          GitOps, CI/CD and modern observability.

        </p>

      </div>

      {/* RIGHT */}

      <div className="space-y-4">

        <div
          className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-slate-700
          bg-slate-950/60
          px-5
          py-4
        "
        >
          <TbCalendar className="text-cyan-400 text-xl" />

          <span className="text-slate-300">

            {period}

          </span>

        </div>

        <div
          className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-slate-700
          bg-slate-950/60
          px-5
          py-4
        "
        >
          <TbMapPin className="text-cyan-400 text-xl" />

          <span className="text-slate-300">

            {location}

          </span>

        </div>

      </div>
    </div>
  );
}