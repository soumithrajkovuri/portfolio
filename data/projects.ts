export const projects = [
    {
      id: 1,
  
      title: "Enterprise AWS Infrastructure Automation",
  
      subtitle:
        "Terraform | Amazon EKS | AWS",
  
      problem:
        "Provisioning AWS infrastructure manually was time-consuming and inconsistent across environments.",
  
      solution:
        "Built reusable Terraform modules to provision Amazon EKS clusters, VPCs, IAM roles, networking resources, and supporting AWS infrastructure.",
  
      impact: [
        "Reduced provisioning time by 95%",
        "Eliminated configuration drift",
        "Standardized multi-environment deployments"
      ],
  
      technologies: [
        "Terraform",
        "AWS",
        "Amazon EKS",
        "IAM",
        "VPC",
        "Route53",
        "CloudWatch"
      ],
  
      architecture: [
        "Terraform",
        "AWS",
        "Amazon EKS",
        "Applications"
      ]
    },
  
    {
      id: 2,
  
      title: "GitOps Deployment Platform",
  
      subtitle:
        "GitHub Actions | ArgoCD | Helm",
  
      problem:
        "Manual deployments increased release time and deployment inconsistencies.",
  
      solution:
        "Implemented GitHub Actions, Helm, and ArgoCD to automate application deployments into Amazon EKS.",
  
      impact: [
        "Reduced release cycles by 40%",
        "Enabled automated rollbacks",
        "Improved deployment consistency"
      ],
  
      technologies: [
        "GitHub Actions",
        "ArgoCD",
        "Helm",
        "Docker",
        "Amazon EKS"
      ],
  
      architecture: [
        "GitHub",
        "Actions",
        "ECR",
        "ArgoCD",
        "Amazon EKS"
      ]
    },
  
    {
      id: 3,
  
      title: "Centralized Observability Platform",
  
      subtitle:
        "Grafana | Prometheus | ELK",
  
      problem:
        "Metrics and logs were scattered across multiple monitoring systems.",
  
      solution:
        "Implemented centralized monitoring using Grafana, Prometheus, ELK Stack, Amazon CloudWatch, and Grafana Loki.",
  
      impact: [
        "Reduced MTTR",
        "Improved production visibility",
        "Enabled proactive alerting"
      ],
  
      technologies: [
        "Grafana",
        "Prometheus",
        "ELK",
        "CloudWatch",
        "Grafana Loki"
      ],
  
      architecture: [
        "Applications",
        "Prometheus",
        "Grafana",
        "Alerts"
      ]
    },
  
    {
      id: 4,
  
      title: "CloudWatch → Grafana Loki",
  
      subtitle:
        "AWS Lambda | CloudWatch Logs",
  
      problem:
        "CloudWatch Logs needed to be centralized for unified log analysis.",
  
      solution:
        "Developed an AWS Lambda log forwarding solution to ingest CloudWatch Logs into Grafana Loki.",
  
      impact: [
        "Centralized AWS log aggregation",
        "Improved troubleshooting",
        "Reduced investigation time"
      ],
  
      technologies: [
        "AWS Lambda",
        "CloudWatch",
        "Grafana Loki",
        "Python"
      ],
  
      architecture: [
        "CloudWatch",
        "Lambda",
        "Grafana Loki",
        "Grafana"
      ]
    },
  
    {
      id: 5,
  
      title: "Windows Log Collection",
  
      subtitle:
        "Grafana Alloy",
  
      problem:
        "Windows application logs were not centrally collected.",
  
      solution:
        "Configured Grafana Alloy to collect Windows Event Logs and forward them into Grafana Loki.",
  
      impact: [
        "Centralized Windows logging",
        "Improved observability",
        "Faster incident response"
      ],
  
      technologies: [
        "Grafana Alloy",
        "Grafana Loki",
        "Windows"
      ],
  
      architecture: [
        "Windows",
        "Grafana Alloy",
        "Grafana Loki",
        "Grafana"
      ]
    }
  ];