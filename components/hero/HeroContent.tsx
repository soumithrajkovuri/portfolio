"use client";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { motion } from "framer-motion";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div

     initial={{opacity:0,y:40}}

     animate={{opacity:1,y:0}}

     transition={{duration:.7}}

     >
      <p className="text-cyan-400 font-semibold">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-6xl lg:text-4xl leading-tight font-extrabold tracking-tight">
        Soumith Raj Kovuri
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-cyan-400">

       Site Reliability Engineer

       </h2>

      <p className="mt-2 text-lg text-slate-300">

      Cloud Platform Engineer • AWS • Kubernetes • DevOps

      </p>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
      Designing, automating, and operating secure, scalable, and highly available cloud-native platforms using AWS, Kubernetes, Terraform, GitOps, CI/CD, and modern observability solutions. Passionate about platform engineering, infrastructure automation, and building resilient production systems.
      </p>

      <HeroButtons />

      <HeroStats />


      <HeroSocials />
    </motion.div>
  );
}