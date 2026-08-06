import ArchitectureCard from "./ArchitectureCard";
import { architectures } from "./architectureData";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <span className="text-cyan-400 font-semibold uppercase tracking-[0.25em]">
          Portfolio
        </span>

        <h2 className="mt-4 text-6xl font-bold text-white">
          Architecture Showcase
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">
          A collection of real-world cloud platform architectures designed and
          implemented across AWS, Kubernetes, Terraform, GitOps, centralized
          logging, and observability.
        </p>

        <div className="mt-20 space-y-16">
  {architectures.map((architecture) => (
    <ArchitectureCard
      key={architecture.title}
      title={architecture.title}
      image={architecture.image}
      description={architecture.description}
    />
  ))}
</div>

      </div>
    </section>
  );
}