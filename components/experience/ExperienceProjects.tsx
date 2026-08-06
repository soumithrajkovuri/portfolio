"use client";

import { motion } from "framer-motion";

import {
  TbCloudComputing,
  TbBrandGit,
  TbActivityHeartbeat,
  TbCode,
  TbServer,
  TbDatabase,
} from "react-icons/tb";

type Props = {
  projects: string[];
};

const projectIcons = [
  TbCloudComputing,
  TbServer,
  TbBrandGit,
  TbActivityHeartbeat,
  TbDatabase,
  TbCode,
];

const descriptions = [
  "Provisioned reusable AWS infrastructure using Terraform modules for production environments.",

  "Built and managed highly available Amazon EKS clusters with Kubernetes best practices.",

  "Implemented GitOps deployment workflows using ArgoCD and GitHub Actions.",

  "Designed centralized monitoring using Grafana, Prometheus, CloudWatch and ELK.",

  "Integrated CloudWatch logs with Grafana Loki for centralized observability.",

  "Developed Python automation for operational tasks and infrastructure health monitoring.",
];

const impacts = [
  "95% Faster Provisioning",
  "99.9% Availability",
  "40% Faster Releases",
  "50% Faster Incident Detection",
  "Centralized Logging",
  "Reduced Manual Effort",
];

export default function ExperienceProjects({
  projects,
}: Props) {
  return (
    <div className="mt-20">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-3xl font-bold text-white">
            Featured Projects
          </h3>

          <p className="mt-2 text-slate-400">
            Major engineering initiatives delivered in production.
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

        {projects.map((project, index) => {

          const Icon = projectIcons[index];

          return (

            <motion.div

              key={project}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: index * .1,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group
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

              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-cyan-400
                "
              />

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                "
              >

                <Icon className="text-4xl text-cyan-400" />

              </div>

              <h4 className="mt-8 text-2xl font-bold text-white">

                {project}

              </h4>

              <p className="mt-5 leading-8 text-slate-400">

                {descriptions[index]}

              </p>

              <div
                className="
                  mt-8
                  inline-flex
                  rounded-full
                  bg-green-500/10
                  border
                  border-green-500/20
                  px-4
                  py-2
                  text-green-400
                  font-medium
                "
              >

                {impacts[index]}

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}