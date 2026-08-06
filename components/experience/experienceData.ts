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
    SiGrafana,
    SiPrometheus,
    SiRabbitmq,
    SiRedis,
    SiPostgresql,
  } from "react-icons/si";
  
  import {
    TbCloudComputing,
    TbActivityHeartbeat,
    TbBrandGit,
    TbShieldLock,
    TbCode,
  } from "react-icons/tb";
  
  export const experiences = [
    {
      company: "Philips",
  
      role: "DevOps Engineer",
  
      period: "Sep 2024 — Present",
  
      location: "Bangalore, India",
  
      summary:
        "Designing, automating and operating secure, scalable cloud-native platforms on AWS. Responsible for Amazon EKS, Infrastructure as Code, GitOps, CI/CD, Monitoring, Observability and Platform Engineering.",
  
      stats: [
        {
          value: "95%",
          label: "Automation",
        },
  
        {
          value: "99.9%",
          label: "Availability",
        },
  
        {
          value: "30+",
          label: "Microservices",
        },
  
        {
          value: "15+",
          label: "AWS Services",
        },
      ],
  
      highlights: [
        {
          title: "AWS Platform Engineering",
  
          description:
            "Provisioned secure AWS infrastructure using reusable Terraform modules.",
  
          icon: TbCloudComputing,
        },
  
        {
          title: "Amazon EKS",
  
          description:
            "Managed production Kubernetes clusters with autoscaling, monitoring and zero-downtime deployments.",
  
          icon: SiKubernetes,
        },
  
        {
          title: "Infrastructure as Code",
  
          description:
            "Created reusable Terraform modules supporting multiple production environments.",
  
          icon: SiTerraform,
        },
  
        {
          title: "GitOps & CI/CD",
  
          description:
            "Implemented GitHub Actions and ArgoCD deployment pipelines.",
  
          icon: TbBrandGit,
        },
  
        {
          title: "Observability",
  
          description:
            "Designed centralized monitoring using Grafana, Prometheus, CloudWatch and ELK.",
  
          icon: TbActivityHeartbeat,
        },
  
        {
          title: "Cloud Security",
  
          description:
            "Performed vulnerability remediation, IAM hardening and infrastructure security improvements.",
  
          icon: TbShieldLock,
        },
      ],
  
      projects: [
        "Terraform Infrastructure Platform",
        "Amazon EKS Platform",
        "GitOps Deployment Platform",
        "Centralized Monitoring",
        "CloudWatch → Grafana Loki",
        "Python Automation",
      ],
  
      technologies: [
        {
          name: "AWS",
          icon: FaAws,
        },
  
        {
          name: "Amazon EKS",
          icon: SiKubernetes,
        },
  
        {
          name: "Terraform",
          icon: SiTerraform,
        },
  
        {
          name: "Docker",
          icon: FaDocker,
        },
  
        {
          name: "Helm",
          icon: SiHelm,
        },
  
        {
          name: "GitHub Actions",
          icon: SiGithubactions,
        },
  
        {
          name: "Grafana",
          icon: SiGrafana,
        },
  
        {
          name: "Prometheus",
          icon: SiPrometheus,
        },
  
        {
          name: "RabbitMQ",
          icon: SiRabbitmq,
        },
  
        {
          name: "Redis",
          icon: SiRedis,
        },
  
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
        },
  
        {
          name: "Python",
          icon: FaPython,
        },
      ],
  
      achievements: [
        "Reduced infrastructure provisioning time by 95% using Terraform modules.",
        "Maintained 99.9% production platform availability.",
        "Migrated applications to GitOps using ArgoCD.",
        "Built reusable Terraform modules for AWS infrastructure.",
        "Implemented centralized monitoring using Grafana and Prometheus.",
        "Integrated CloudWatch logs with Grafana Loki.",
        "Automated operational tasks using Python.",
        "Improved deployment speed by 40% through CI/CD automation.",
      ],
    },
  
    {
      company: "Philips",
  
      role: "Graduate Intern",
  
      period: "Jul 2023 — May 2024",
  
      location: "Bangalore, India",
  
      summary:
        "Supported cloud operations, Linux administration, production monitoring, infrastructure automation, vulnerability management and patching activities.",
  
      stats: [
        {
          value: "150+",
          label: "Servers",
        },
  
        {
          value: "20+",
          label: "Dashboards",
        },
  
        {
          value: "50%",
          label: "Faster Troubleshooting",
        },
  
        {
          value: "99.9%",
          label: "Platform Uptime",
        },
      ],
  
      highlights: [
        {
          title: "Cloud Operations",
  
          description:
            "Supported production AWS cloud infrastructure and monitoring.",
  
          icon: TbCloudComputing,
        },
  
        {
          title: "Linux Administration",
  
          description:
            "Performed Linux administration, troubleshooting and server maintenance.",
  
          icon: FaLinux,
        },
  
        {
          title: "Python Automation",
  
          description:
            "Developed automation scripts for operational tasks and monitoring.",
  
          icon: TbCode,
        },
  
        {
          title: "Monitoring",
  
          description:
            "Created Grafana dashboards and production monitoring alerts.",
  
          icon: TbActivityHeartbeat,
        },
      ],
  
      projects: [
        "Grafana Dashboards",
        "Linux Administration",
        "Server Patching",
        "Production Monitoring",
        "Python Automation",
      ],
  
      technologies: [
        {
          name: "AWS",
          icon: FaAws,
        },
  
        {
          name: "Grafana",
          icon: SiGrafana,
        },
  
        {
          name: "Docker",
          icon: FaDocker,
        },
  
        {
          name: "Linux",
          icon: FaLinux,
        },
  
        {
          name: "Python",
          icon: FaPython,
        },
      ],
  
      achievements: [
        "Built 20+ Grafana dashboards.",
        "Reduced troubleshooting time by 50%.",
        "Patched 150+ Linux servers.",
        "Developed automated URL monitoring scripts.",
        "Maintained 99.9% production uptime.",
      ],
    },
  ];
