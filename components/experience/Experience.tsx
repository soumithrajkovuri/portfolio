"use client";

import { motion } from "framer-motion";

import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl"
        >
          <span className="text-cyan-400 font-semibold tracking-[0.25em] uppercase">
            Experience
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Building secure, scalable, and highly available cloud-native
            platforms using AWS, Kubernetes, Terraform, GitOps, CI/CD,
            Monitoring, and Platform Engineering.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              hidden
              md:block
              w-px
              bg-gradient-to-b
              from-cyan-400
              via-slate-700
              to-transparent
            "
          />

          <div className="space-y-20">

            {experiences.map((experience, index) => (

              <motion.div
                key={experience.role}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .6,
                }}
                className="relative"
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    hidden
                    md:flex
                    left-6
                    top-12
                    -translate-x-1/2
                    h-5
                    w-5
                    rounded-full
                    bg-cyan-400
                    ring-8
                    ring-slate-950
                  "
                />

                {/* Card */}

                <div className="md:ml-16">

                  <ExperienceCard
                    experience={experience}
                  />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}