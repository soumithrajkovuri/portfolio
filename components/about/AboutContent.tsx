"use client";

export default function AboutContent() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md">

      <h3 className="text-2xl font-semibold text-white">
        Who I Am
      </h3>

      <p className="mt-6 leading-8 text-slate-400">
      I build reliable cloud-native platforms that enable engineering teams
      to deploy faster, operate securely, and scale confidently.

       My experience spans Infrastructure as Code, Kubernetes platform
       engineering, CI/CD automation, observability, production operations,
       and cloud architecture on AWS.

       I enjoy solving complex production challenges, improving system
       reliability, and eliminating repetitive operational work through
       automation.

      </p>

      <p className="mt-6 leading-8 text-slate-400">

        My daily work involves provisioning infrastructure,
        improving deployment reliability, resolving production incidents,
        implementing observability solutions,
        optimizing Kubernetes workloads,
        and building automation that improves operational efficiency
        while maintaining highly available production environments.

      </p>

    </div>
  );
}