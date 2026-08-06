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
    TbCode,
    TbShieldLock,
  } from "react-icons/tb";
  
  export const experiences = [
    {
      company: "Philips",
      role: "Site Reliability Engineer",
      period: "Sep 2024 — Present",
      location: "Bangalore, India",
  
      summary:
        "Designing and operating secure, highly available cloud-native platforms on AWS. Responsible for Platform Engineering, Kubernetes, Infrastructure as Code, GitOps, Monitoring and Automation.",
  
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
            "Provisioned production AWS infrastructure using reusable Terraform modules.",
          icon: TbCloudComputing,
        },
  
        {
          title: "Amazon EKS",
          description:
            "Managed production Kubernetes clusters with autoscaling and monitoring.",
          icon: SiKubernetes,
        },
  
        {
          title: "Infrastructure as Code",
          description:
            "Developed reusable Terraform modules for multiple environments.",
          icon: SiTerraform,
        },
  
        {
          title: "GitOps",
          description:
            "Implemented GitHub Actions and ArgoCD deployment pipelines.",
          icon: TbBrandGit,
        },
  
        {
          title: "Observability",
          description:
            "Built Grafana, Prometheus, CloudWatch and ELK monitoring platforms.",
          icon: TbActivityHeartbeat,
        },
  
        {
          title: "Security",
          description:
            "Performed vulnerability remediation and security hardening.",
          icon: TbShieldLock,
        },
      ],
  
      projects: [
        "Terraform Platform",
        "Amazon EKS Platform",
        "GitOps Platform",
        "Centralized Logging",
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
        "Reduced infrastructure provisioning time by 95%",
        "Maintained 99.9% production availability",
        "Implemented GitOps deployment strategy",
        "Built reusable Terraform modules",
        "Designed centralized monitoring platform",
        "Developed self-healing automation scripts",
        "Implemented CloudWatch → Loki integration",
        "Improved deployment speed by 40%",
      ],
    },
  
    {
      company: "Philips",
  
      role: "Graduate Intern",
  
      period: "Jul 2023 — May 2024",
  
      location: "Bangalore, India",
  
      summary:
        "Supported production cloud operations, Linux administration, monitoring, automation and infrastructure management.",
  
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
          label: "Troubleshooting",
        },
  
        {
          value: "99.9%",
          label: "Uptime",
        },
      ],
  
      highlights: [
        {
          title: "Cloud Operations",
  
          description:
            "Supported production cloud infrastructure and monitoring.",
  
          icon: TbCloudComputing,
        },
  
        {
          title: "Linux",
  
          description:
            "Performed Linux administration and troubleshooting.",
  
          icon: FaLinux,
        },
  
        {
          title: "Automation",
  
          description:
            "Developed Python automation scripts.",
  
          icon: TbCode,
        },
  
        {
          title: "Monitoring",
  
          description:
            "Built Grafana dashboards and monitoring alerts.",
  
          icon: TbActivityHeartbeat,
        },
      ],
  
      projects: [
        "Grafana Dashboards",
        "Patch Automation",
        "Cloud Monitoring",
        "Linux Administration",
        "URL Monitoring",
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
        "Built 20+ Grafana dashboards",
        "Reduced troubleshooting time by 50%",
        "Patched 150+ Linux servers",
        "Developed URL monitoring automation",
        "Maintained 99.9% uptime",
      ],
    },
  ];