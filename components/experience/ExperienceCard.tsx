"use client";

import { motion } from "framer-motion";
import ExperienceHeader from "./ExperienceHeader";
import { TbCalendar, TbMapPin, TbCircleCheck } from "react-icons/tb";
import ExperienceStats from "./ExperienceStats";
import ExperienceHighlights from "./ExperienceHighlights";
import ExperienceProjects from "./ExperienceProjects";

import ExperienceAchievements from "./ExperienceAchievements";

type Props = {
  experience: any;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        shadow-xl
      "
    >
      {/* Top Gradient */}

      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

      <div className="p-10">

        {/* Header */}

        <ExperienceHeader
  company={experience.company}
  role={experience.role}
  period={experience.period}
  location={experience.location}
/>

        {/* KPI Cards */}

        <ExperienceStats
    stats={experience.stats}
/>

        {/* Technology Stack */}

        <ExperienceHighlights
    highlights={experience.highlights}
/>

{/* Technology Stack */}

        {/* Achievements */}

        

<ExperienceAchievements
    achievements={experience.achievements}
/>

        {/* Featured Projects */}

        <ExperienceProjects
    projects={experience.projects}
/>

      </div>
    </motion.div>
  );
}