"use client";

import { useEffect, useRef, useState } from "react";

const commands = [
  "> terraform plan",
  "",
  "Plan: 18 to add, 0 to change, 0 to destroy.",
  "",
  "────────────────────────────────────────────",
  "",
  "> terraform apply",
  "",
  "✔ Apply complete!",
  "",
  "18 resources added",
  "0 changed",
  "0 destroyed",
  "",
  "────────────────────────────────────────────",
  "",
  "> aws eks list-clusters",
  "",
  "int-euw1-prs-cluster",
  "qa-euw1-prs-cluster",
  "prod-euw1-prs-cluster",
  "",
  "────────────────────────────────────────────",
  "",
  "> kubectl get nodes",
  "",
  "NAME                     STATUS",
  "ip-10-0-12-15            Ready",
  "ip-10-0-14-27            Ready",
  "ip-10-0-16-18            Ready",
  "",
  "────────────────────────────────────────────",
  "",
  "> kubectl get pods -A",
  "",
  "alarm-service            Running",
  "telemetry-service        Running",
  "rabbitmq                 Running",
  "redis                    Running",
  "postgres                 Running",
  "prometheus               Running",
  "grafana                  Running",
  "",
  "────────────────────────────────────────────",
  "",
  "> kubectl top pods",
  "",
  "alarm-service       110m   320Mi",
  "rabbitmq            245m   520Mi",
  "redis                70m   185Mi",
  "postgres            180m   610Mi",
  "",
  "────────────────────────────────────────────",
  "",
  "> argocd app list",
  "",
  "prs-platform        Synced    Healthy",
  "monitoring          Synced    Healthy",
  "logging             Synced    Healthy",
  "",
  "────────────────────────────────────────────",
  "",
  "> aws eks describe-cluster",
  "",
  "STATUS  : ACTIVE",
  "VERSION : 1.31",
  "",
  "────────────────────────────────────────────",
  "",
  "> grafana health",
  "",
  "✔ Prometheus Connected",
  "✔ Loki Healthy",
  "✔ CloudWatch Connected",
  "✔ Dashboards Online",
  "",
  "────────────────────────────────────────────",
  "",
  "> rabbitmqctl list_queues",
  "",
  "alarm-queue          0",
  "telemetry-queue      0",
  "notification-queue   0",
  "",
  "────────────────────────────────────────────",
  "",
  "> redis-cli INFO",
  "",
  "used_memory_human:256MB",
  "connected_clients:24",
  "",
  "────────────────────────────────────────────",
  "",
  "Production Platform",
  "",
  "Availability : 99.9%",
  "Critical Alerts : 0",
  "Deployments Today : 12",
  "",
  "✔ Platform Healthy",
];

export default function HeroTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;

    const startAnimation = () => {
      setLines([]);
      index = 0;

      timer = setInterval(() => {
        setLines((prev) => {
          const updated = [...prev, commands[index]];

          setTimeout(() => {
            containerRef.current?.scrollTo({
              top: containerRef.current.scrollHeight,
              behavior: "smooth",
            });
          }, 10);

          return updated;
        });

        index++;

        if (index >= commands.length) {
          clearInterval(timer);

          setTimeout(() => {
            startAnimation();
          }, 4000);
        }
      }, 450);
    };

    startAnimation();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl rotate-1 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-700 bg-slate-800 px-6 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 text-sm text-slate-400">
          soumith@platform:~
        </span>
      </div>

      {/* Body */}
      <div
        ref={containerRef}
        className="h-[700px] overflow-y-auto p-8 font-mono text-[15px] leading-8 text-green-400 scrollbar-thin scrollbar-thumb-slate-700"
      >
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        <span className="animate-pulse text-green-400">█</span>
      </div>
    </div>
  );
}