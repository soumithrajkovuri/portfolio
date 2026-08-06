"use client";

import SkillCard from "./SkillCard";

import {
  FaAws,
  FaDocker,
  FaPython,
  FaLinux,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiHelm,
  SiGithubactions,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";

import {
  TbBrandGit,
  TbCloudComputing,
  TbTopologyComplex,
  TbDatabase,
  TbDeviceDesktopAnalytics,
  TbCode,
  TbShieldLock,
  TbWorld,
  TbBolt,
  TbMessageCircle,
  TbTopologyStar3,
  TbMessage,
} from "react-icons/tb";

const categories = [
  {
    title: "Cloud Platform",
    icon: TbCloudComputing,
    technologies: [
      { label: "AWS", icon: FaAws },
      { label: "Amazon EKS", icon: SiKubernetes },
      { label: "IAM", icon: TbShieldLock },
      { label: "Route53", icon: TbWorld },
      { label: "CloudWatch", icon: TbDeviceDesktopAnalytics },
      { label: "Lambda", icon: TbBolt },
      { label: "Amazon S3", icon: FaAws },
      { label: "ALB", icon: TbTopologyStar3 },
      { label: "NLB", icon: TbTopologyStar3 },
      { label: "VPC", icon: TbTopologyComplex },
      { label: "Lambda", icon: TbBolt },
      { label: "Amazon SQS", icon: TbMessage },
      { label: "Amazon EKS", icon: SiKubernetes },
      { label: "Amazon ECS", icon: FaAws },
    ],
  },

  {
    title: "Containers",
    icon: TbTopologyComplex,
    technologies: [
      { label: "Docker", icon: FaDocker },
      { label: "Kubernetes", icon: SiKubernetes },
      { label: "Helm", icon: SiHelm },
      
    ],
  },

  {
    title: "Infrastructure as Code",
    icon: SiTerraform,
    technologies: [
      { label: "Terraform", icon: SiTerraform },
      { label: "CloudFormation", icon: FaAws },
      { label: "Ansible", icon: TbTopologyComplex },
    ],
  },

  {
    title: "CI/CD",
    icon: TbBrandGit,
    technologies: [
      { label: "GitHub Actions", icon: SiGithubactions },
      { label: "Jenkins", icon: SiJenkins },
      { label: "Git", icon: TbBrandGit },
      { label: "ArgoCD", icon: TbBrandGit },
    ],
  },

  {
    title: "Observability",
    icon: TbDeviceDesktopAnalytics,
    technologies: [
      { label: "Grafana", icon: SiGrafana },
      { label: "Prometheus", icon: SiPrometheus },
      { label: "CloudWatch", icon: TbDeviceDesktopAnalytics },
      { label: "ELK Stack", icon: SiElasticsearch },
      { label: "Grafana Loki", icon: SiGrafana },
      { label: "Grafana Alloy", icon: SiGrafana },
    ],
  },

  {
    title: "Databases",
    icon: TbDatabase,
    technologies: [
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "Redis", icon: SiRedis },
    ],
  },

  {
    title: "Messaging",
    icon: SiRabbitmq,
    technologies: [
      { label: "RabbitMQ", icon: SiRabbitmq },
      { label: "Amazon SNS", icon: TbMessageCircle },
      { label: "Amazon MQ", icon: TbMessageCircle },
    ],
  },

  {
    title: "Programming",
    icon: TbCode,
    technologies: [
      { label: "Python", icon: FaPython },
      { label: "Bash", icon: FaLinux },
      { label: "Linux", icon: FaLinux },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          TECH STACK
        </p>

        <h2 className="mt-3 text-5xl font-bold text-white">
          Technologies I Work With
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Production-ready technologies used daily for designing,
          automating, deploying, monitoring, and operating secure,
          scalable cloud-native platforms on AWS.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {categories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              technologies={category.technologies}
            />
          ))}
        </div>

      </div>
    </section>
  );
}